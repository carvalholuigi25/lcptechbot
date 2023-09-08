const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Select a member and timeout them.')
		.addUserOption(option => option.setName('target').setDescription('The member to timeout').setRequired(true))
		.addIntegerOption(option => option.setName('tvalue').setDescription('The number to timeout member(s) (default is 1)').setRequired(false)),
	async execute(interaction) {
        const isThisCmdEnabled = false;

        if(!isThisCmdEnabled) return interaction.reply({ content: "This cmd is disabled by mods/admins.", ephemeral: true });
        if(!interaction.member.hasPermission("TIMEOUT_MEMBERS")) return interaction.reply({ content: "You cant use that!", ephemeral: true });
        if(!interaction.guild.me.hasPermission("TIMEOUT_MEMBERS")) return interaction.reply({ content: 'I dont have the right permissions.', ephemeral: true });

		const member = interaction.mentions.members.first() || interaction.options.getMember('target');
		const tvalue = (interaction.options.getInteger('tvalue') ?? 1) * 60 * 1000;

        if(!member) return interaction.reply({ content: 'Cant seem to find this user. Sorry about that :/', ephemeral: true });
        if(!member.bannable) return interaction.reply({ content: 'This user cant be timeout. It is either because they are a mod/admin, or their highest role is higher than mine', ephemeral: true });
		if(member.user.username === interaction.user.username) return interaction.reply({ content: "You cannot timeout yourself!", ephemeral: true });

        member.timeout(tvalue).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to timeout this member!', ephemeral: true });
		});

		return interaction.reply({ 
			content: `The member ${member.user.username} has been timeout by ${interaction.user.username} (Duration: ${tvalue})`, 
			ephemeral: true 
		});
	},
};