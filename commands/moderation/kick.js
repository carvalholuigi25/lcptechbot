const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Select a member and kick them.')
		.addUserOption(option => option.setName('target').setDescription('The member to kick').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('The reason of kick member(s)').setRequired(false)),
	async execute(interaction) {
		const isThisCmdEnabled = false;

		if (!isThisCmdEnabled) return interaction.reply({ content: "This cmd is disabled by mods/admins.", ephemeral: true });
		if (!interaction.member.hasPermission("KICK_MEMBERS")) return interaction.reply({ content: "You cant use that!", ephemeral: true })
		if (!interaction.guild.me.hasPermission("KICK_MEMBERS")) return interaction.reply({ content: 'I dont have the right permissions.', ephemeral: true })

		const member = interaction.options.getMember('target');
		const reason = interaction.options.getString('reason');

		if (!member) return interaction.reply({ content: 'Cant seem to find this user. Sorry about that :/', ephemeral: true });
		if (!member.kicknable) return interaction.reply({ content: 'This user cant be kicked. It is either because they are a mod/admin, or their highest role is higher than mine', ephemeral: true });
		if (member.user.username === interaction.user.username) return interaction.reply({ content: "You cannot kick yourself!", ephemeral: true });

		member.kick(`${reason}`).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to kick this member!', ephemeral: true });
		});

		return interaction.reply({
			content: `The member ${member.user.username} has been kicked by ${interaction.user.username} (Reason: ${reason})`,
			ephemeral: true
		});
	},
};