require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { clientId, serverId, token } = process.env;
const { REST, Routes, Collection, Events } = require('discord.js');

async function deployServer() {
    const commands = getCommands();
    const rest = new REST().setToken(token);

    (async () => {
        try {
            // console.log(`Commands: ${JSON.stringify(commands, null, 2)} `);
            console.log(`Started refreshing ${commands.length} application (/) commands.`);

            const data = await rest.put(
                Routes.applicationGuildCommands(clientId, serverId),
                { body: commands },
            );

            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    })();
}

function getCommands() {
    const commands = [];
    const aryfrms = [".js", ".cjs", ".mjs"];
    const foldersPath = path.join(__dirname, 'commands');
    const commandFolders = fs.readdirSync(foldersPath);

    for (const folder of commandFolders) {
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter((file, index, aryfrms) => {
            let value = false;
            value = aryfrms.some(element => {
                return file.endsWith(element);
            });
            return value;
        });

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);

            if ('data' in command && 'execute' in command) {
                commands.push(command.data.toJSON());
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
    }

    return commands;
}

function setupClientCMDS(client) {
    client.commands = new Collection();

    const aryfrms = [".js", ".cjs", ".mjs"];
    const foldersPath = path.join(__dirname, 'commands');
    const commandFolders = fs.readdirSync(foldersPath);

    for (const folder of commandFolders) {
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter((file, index, aryfrms) => {
            let value = false;
            value = aryfrms.some(element => {
                return file.endsWith(element);
            });
            return value;
        });

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);

            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
    }
}

function loadEvents(client) {
    const eventsPath = path.join(__dirname, 'events');
    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        const event = require(filePath);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}


module.exports = {
    setupClientCMDS,
    getCommands,
    loadEvents,
    deployServer
};