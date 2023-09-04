const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('Gets current time!'),
	async execute(interaction) {
		return interaction.reply(new Date().toISOString());
	},
};