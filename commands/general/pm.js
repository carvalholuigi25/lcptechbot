const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pm')
		.setDescription('Send a private message for specific user.')
		.addUserOption(option => option.setName('target').setDescription('Write the username here').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('Write the message here').setRequired(true)),
	async execute(interaction) {
        const member = interaction.options.getMember('target');
        const message = interaction.options.getString('message');

        interaction.client.users.send(member.id, message);

        const cmdemb = createMyEmbed({
            title: 'PM (Private Message)',
            description: `Sent to private message for this member ${member}`
        });
		return interaction.reply({ embeds: [cmdemb] });
	},
};