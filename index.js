require('dotenv').config();
const keep_alive = require("./keep_alive.js");
const { Client, GatewayIntentBits } = require('discord.js');
const { setupClientCMDS, loadEvents, deployServer } = require('./functions');
const { token } = process.env;
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ] 
});

deployServer();
setupClientCMDS(client);
loadEvents(client);

client.login(token);