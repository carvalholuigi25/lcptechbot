const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Suggest something to the server.')
        .addStringOption(option => option.setName('message').setDescription('Write the message here').setRequired(true)),
	async execute(interaction) {
        const message = interaction.options.getString('message');
        const channel = interaction.client.channels.cache.find(chn => chn.name === "questões-e-sugestões");

        channel.send(message);

        const cmdemb = createMyEmbed({
            title: 'Suggestion (Sugestão)',
            description: `Your suggestion message has been sent to the suggestions channel!`
        });
        
		return interaction.reply({ embeds: [cmdemb] });
	},
};