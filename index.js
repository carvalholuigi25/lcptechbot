const { Client, GatewayIntentBits } = require('discord.js');
const { setupClientCMDS, loadEvents, deployServer } = require('./functions');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

deployServer();
setupClientCMDS(client);
loadEvents(client);

client.login(token);