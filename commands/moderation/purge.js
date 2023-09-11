const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Purge up to 1000 messages.')
		.addIntegerOption(option => option.setName('amount').setDescription('Number of messages to purge')),
	async execute(interaction) {
		const isThisCmdEnabled = false;
		if (!isThisCmdEnabled) return interaction.reply({ content: "This cmd is disabled by mods/admins.", ephemeral: true });

		const member = interaction.options.getMember('target');
		const amount = interaction.options.getInteger('amount');

		if (!member.roles.cache.some(role => ["moderadores", "administradores"].includes(role.name))) {
			return interaction.reply({ content: "This command is only for moderators and administrators!", ephemeral: true });
		}

		if (amount < 1 || amount > 1000) {
			return interaction.reply({ content: 'You need to input a number between 1 and 1000.', ephemeral: true });
		}

		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to purge messages in this channel!', ephemeral: true });
		});

		return interaction.reply({ content: `Successfully purged \`${amount}\` messages.`, ephemeral: true });
	},
};