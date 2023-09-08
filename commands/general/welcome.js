const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('Shows the welcome message of this server'),
	async execute(interaction) {
        const cmdemb = createMyEmbed({
            title: 'Welcome (Bem-vindo/a)',
            description: `
            \nBem vindos ao LCPTech!
            \nAqui neste server, vocês podem conversar, discutir e partilhar muitas coisas sobre tecnologia e outros temas. 
            \nPara serem aceites de serem membros deste server, é preciso de ir ao canal #regras, ler tudo com atenção e aceitar com o uso do emoji 👍. 
            \nPara terem cargos da vossa conta, basta de ir ao canal #cargos e escolher um ou vários cargos para aceder aos canais que tem determinada permissão.
            \nDivirtam-se!`
        });
		return interaction.reply({ embeds: [cmdemb] });
	},
};