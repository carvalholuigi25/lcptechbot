const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Select a member and mute them.')
		.addUserOption(option => option.setName('target').setDescription('The member to mute').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('The reason of mute to member').setRequired(false)),
	async execute(interaction) {
		const isThisCmdEnabled = false;

		if (!isThisCmdEnabled) return interaction.reply({ content: "This cmd is disabled by mods/admins.", ephemeral: true });

		const member = interaction.options.getMember('target');
		const reason = interaction.options.getMember('reason');
		const muteRole = interaction.guild.roles.cache.find((role) => role.name === 'Muted');

		if (!muteRole) return interaction.reply({ content: 'Mute role not found. Please create a role called "Muted"', ephemeral: true });
		if (!member) return interaction.reply({ content: 'Cant seem to find this user. Sorry about that :/', ephemeral: true });
		if (!member.bannable) return interaction.reply({ content: 'This user cant be muted. It is either because they are a mod/admin, or their highest role is higher than mine', ephemeral: true });
		if (member.user.username === interaction.user.username) return interaction.reply({ content: "You cannot mute yourself!", ephemeral: true });

		await member.roles.add(muteRole);

		return interaction.reply({
			content: `The member ${member.user.username} has been muted by ${interaction.user.username} (Reason: ${reason})`,
			ephemeral: true
		});
	},
};