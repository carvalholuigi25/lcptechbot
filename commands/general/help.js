const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows the list of all commands.'),
	async execute(interaction) {
        const cmdemb = createMyEmbed({
            title: 'Help (Ajuda)',
            description: `
            Lista de comandos:\n
            **/help** - Isto mostra a lista de todos comandos.\n
            **/welcome** - Isto mostra a mensagem de boas-vindas.\n
            **/rules** - Isto mostra a mensagem sobre as regras do servidor.\n
            **/time** - Isto mostra a mensagem sobre a data e a hora atual do seu fuso horário.\n
            **/testembed** - Isto mostra a mensagem sobre o teste de embed.\n
            **/ping** - Isto mostra a mensagem sobre ping e irá responder pong.\n
            **/achievements** - Isto mostra a mensagem sobre o meu link de retro achievements.`
        });
		return interaction.reply({ embeds: [cmdemb] });
	},
};