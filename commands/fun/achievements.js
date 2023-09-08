const { SlashCommandBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

// const { buildAuthorization, getAchievementsEarnedBetween } = require("@retroachievements/api");
// const { apiRAchUsername, apiRAchToken } = require('../../config.json');

// const authorization = buildAuthorization({
//     userName: apiRAchUsername, 
//     webApiKey: apiRAchToken
// });

// function paginate(array, page_size, page_number) {
//     return array.slice((page_number - 1) * page_size, page_number * page_size);
// }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('achievements')
		.setDescription('Gets url of my retro achievements of games'),
	async execute(interaction) {
        // let mdata = await getAchievementsEarnedBetween(authorization, { userName: "lusoftdev96", fromDate: new Date("2023-08-08"), toDate: new Date() });
        // mdata.sort((a, b) => { return new Date(b.date) - new Date(a.date); });
        // let mdatap = paginate(mdata, 1, 1);
		const cmdemb = createMyEmbed({
			title: 'Achievements (Conquistas)'
			description: `[lusoftdev96's retro achievements](https://retroachievements.org/user/lusoftdev96)`;
		});
		return interaction.reply({ embeds: [cmdemb] });
	},
};