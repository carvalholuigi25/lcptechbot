const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('Gets current time!'),
	async execute(interaction) {
		const cmdemb = createMyEmbed({
			title: 'Time (Tempo)',
			description: `The current time is ${new Date().toLocaleString()}`
		});
		return interaction.reply({ embeds: [cmdemb] });
	},
};