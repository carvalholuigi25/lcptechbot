const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { createMyEmbed } = require('../../features/embeds/embeds');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testembed')
		.setDescription('This cmd will test the embed if it works!'),
	async execute(interaction) {
		const exampleEmbed = createMyEmbed({
			color: 0x0099ff,
			title: 'Testing embed...',
			url: 'https://github.com/carvalholuigi25/lcptechbot',
			author: {
				name: 'Luis Carvalho',
				icon_url: 'https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500',
				url: 'https://github.com/carvalholuigi25/lcptechbot',
			},
			description: 'This is a test of embed post!',
			thumbnail: {
				url: 'https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500',
			},
			fields: [
				{
					name: 'Regular field title',
					value: 'Some value here',
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: false,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
			],
			image: {
				url: 'https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500',
			},
			timestamp: new Date().toISOString(),
			footer: {
				text: 'By Luis Carvalho',
				icon_url: 'https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500',
			}
		});
		return interaction.reply({ embeds: [exampleEmbed] });
	},
};