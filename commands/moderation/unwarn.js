const { SlashCommandBuilder } = require('discord.js');

const warnings = new Map();

function removeWarning(userId, reason) {
  if (warnings.has(userId)) {
    const userWarnings = warnings.get(userId);
    const index = userWarnings.indexOf(reason);

    if (index !== -1) {
      userWarnings.splice(index, 1);

      // You should also remove the warning from your database or storage here

      return true; // Indicates that the warning was removed
    }
  }

  return false; // Indicates that the warning was not found or not removed
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('unwarn')
    .setDescription('Select a member and unwarn them.')
    .addUserOption(option => option.setName('target').setDescription('The member to unwarn').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason of unwarn member(s)').setRequired(false)),
  async execute(interaction) {
    const isThisCmdEnabled = false;

    if (!isThisCmdEnabled) return interaction.reply({ content: "This cmd is disabled by mods/admins.", ephemeral: true });

    const member = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason');

    if (!member) return interaction.reply({ content: 'Cant seem to find this user. Sorry about that :/', ephemeral: true });
    if (!member.bannable) return interaction.reply({ content: 'This user cant be unwarned. It is either because they are a mod/admin, or their highest role is higher than mine', ephemeral: true });
    if (member.user.username === interaction.user.username) return interaction.reply({ content: "You cannot unwarn yourself!", ephemeral: true });

    const removedWarning = removeWarning(member.id, reason);

    if (removedWarning) {
      return interaction.reply({
        content: `The member ${member.user.username} has been unwarned by ${interaction.user.username} (Reason: ${reason})`,
        ephemeral: true
      });
    } else {
      return interaction.reply({
        content: `Theres no warns for this member ${member.user.username}!`,
        ephemeral: true
      });
    }
  },
};