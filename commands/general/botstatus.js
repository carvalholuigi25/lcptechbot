const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('botstatus')
		.setDescription('Shows the status of bot.'),
	async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        const cmdemb = createMyEmbed({
            title: 'Bot Status (Estado do Bot)',
            description: `
                Heartbeat: ${Math.round(interaction.client.ws.ping)}ms.
                Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms
            `
        });
		return interaction.editReply({ embeds: [cmdemb] });
	},
};