const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { exampleEmbed } = require('../../features/embeds/embeds.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testembed')
		.setDescription('This cmd will test the embed if it works!'),
	async execute(interaction) {
		return interaction.reply({ embeds: [exampleEmbed] });
	},
};