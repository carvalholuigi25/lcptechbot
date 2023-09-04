const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('Gets current time!'),
	async execute(interaction) {
		return interaction.reply(`The current time is ${new Date().toLocaleString()}`);
	},
};