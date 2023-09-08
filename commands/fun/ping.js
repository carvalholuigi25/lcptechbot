const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const cmdemb = createMyEmbed({
			title: 'Ping',
			description: `Pong!`
		});

		return interaction.reply({ embeds: [cmdemb] });
	},
};