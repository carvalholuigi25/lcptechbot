const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('report')
		.setDescription('Report a specific user to the admin.')
		.addUserOption(option => option.setName('target').setDescription('Write the username here').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('Write the message here').setRequired(true)),
	async execute(interaction) {
        const interactionUser = await interaction.guild.members.fetch(interaction.user.id);
        
        const member = interaction.options.getMember('target');
        const message = interaction.options.getString('message');
        const channel = interaction.client.channels.cache.find(chn => chn.name === "reports");
        const author = interactionUser.user.username;

        channel.send(`${message}\r\nAuthor: ${author}`);

        const cmdemb = createMyEmbed({
            title: 'Report (Reportar)',
            description: `The member has been reported to admin messages!`
        });

		return interaction.reply({ embeds: [cmdemb] });
	},
};