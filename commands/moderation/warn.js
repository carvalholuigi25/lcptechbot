const { SlashCommandBuilder } = require('discord.js');

const warnings = new Map();

function addWarning(userId, reason) {
  if (!warnings.has(userId)) {
    warnings.set(userId, []);
  }

  const userWarnings = warnings.get(userId);
  userWarnings.push(reason);

  // You can also log the warning to a database or other storage here

  return userWarnings.length; // Returns the number of warnings for the user
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Select a member and warn them.')
    .addUserOption(option => option.setName('target').setDescription('The member to warn').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason of warn member(s)').setRequired(false)),
  async execute(interaction) {
    const isThisCmdEnabled = false;

    if (!isThisCmdEnabled) return interaction.reply({ content: "This cmd is disabled by mods/admins.", ephemeral: true });

    const member = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason');

    if (!member) return interaction.reply({ content: 'Cant seem to find this user. Sorry about that :/', ephemeral: true });
    if (!member.bannable) return interaction.reply({ content: 'This user cant be warned. It is either because they are a mod/admin, or their highest role is higher than mine', ephemeral: true });
    if (member.user.username === interaction.user.username) return interaction.reply({ content: "You cannot warn yourself!", ephemeral: true });

    addWarning(member.id, reason);

    return interaction.reply({
      content: `The member ${member.user.username} has been warned by ${interaction.user.username} (Reason: ${reason})`,
      ephemeral: true
    });
  },
};