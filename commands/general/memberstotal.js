const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('memberstotal')
		.setDescription('Shows total of members.'),
	async execute(interaction) {
        // console.log(interaction.guild.memberCount);

        interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => !member.user.bot && member.presence?.status === 'online').size;
            const totalOffline = fetchedMembers.filter(member => !member.user.bot && member.presence?.status !== 'online').size;
            const totalBots = fetchedMembers.filter(member => member.user.bot).size;
            const totalAllMembers = totalOnline + totalOffline + totalBots;

            const cmdemb = createMyEmbed({
                title: 'Total of members',
                description: `
                **Members online:** ${totalOnline}\n
                **Members offline:** ${totalOffline}\n
                **Bots:** ${totalBots}\n
                **All members:** ${totalAllMembers}`
            });
            return interaction.reply({ embeds: [cmdemb] });
        });
	},
};