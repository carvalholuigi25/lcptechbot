const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Select a member and unban them.')
		.addUserOption(option => option.setName('target').setDescription('The member to unban').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('The reason of unban member(s)').setRequired(false)),
	async execute(interaction) {
		const isThisCmdEnabled = false;

		if (!isThisCmdEnabled) return interaction.reply({ content: "This cmd is disabled by mods/admins.", ephemeral: true });

		const member = interaction.options.getMember('target');
		const reason = interaction.options.getString('reason');

		if (!member) return interaction.reply({ content: 'Cant seem to find this user. Sorry about that :/', ephemeral: true });
		if (!member.bannable) return interaction.reply({ content: 'This user cant be unbanned. It is either because they are a mod/admin, or their highest role is higher than mine', ephemeral: true });
		if (member.user.username === interaction.user.username) return interaction.reply({ content: "You cannot unban yourself!", ephemeral: true });

		member.unban(`${reason}`).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to unban this member!', ephemeral: true });
		});

		return interaction.reply({
			content: `The member ${member.user.username} has been unbanned by ${interaction.user.username} (Reason: ${reason})`,
			ephemeral: true
		});
	},
};