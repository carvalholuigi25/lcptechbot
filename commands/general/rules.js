const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Shows the current rules of this server'),
	async execute(interaction) {
		return interaction.reply(`
        Regras:\n
        1º - Respeitar sempre os membros e o staff deste server;\n
        2º - É proibido de fazer bullying, insultar e outros de quaisquer tipos de ameaças (racismo, xenofobia, etc...) para esta comunidade;\n
        3º - Não se pode partilhar e nem fazer pirataria, virus e hacks para esta comunidade;\n
        4º - Conversar no tópico em num sitio certo, caso contrário, irá ser movido para off-topic ou ser apagado;\n
        5º - É proibido de partilhar links de porn, gambling e sites de apostas (incluindo publicidade);\n
        6º - Não fazer spam;\n
        7º - Sobre o auto-promoção, é proibido de partilhar isso (exceto se for para parceiros autorizados ou podem, perguntar aos @administradores sobre isso e irão determinar esse caso);\n
        8º - Em caso de ajuda, podes sempre mencionar ou pingar @administradores ou @moderadores em quaisquer tipo de canais desde que não faça spam ou chatear constantemente ao staff;\n
        \nNo caso de incumprimento de uma ou várias regras, irá ser criado castigo para os membros irresponsáveis determinado pelos @administradores ou @moderadores.
        \nLinks úteis:
        \n[Termos do Serviço - Discord](https://discord.com/terms)
        \n[Orientações da Comunidade - Discord](https://discord.com/guidelines)
        \nDivirtam-se!
        \nCumprimentos,
        \nLCPTech
        `);
	},
};