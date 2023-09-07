function createMyEmbed(emb) {
    return {
        color: emb.color ?? 0x0099ff,
        title: emb.title ?? '',
        url: emb.url ?? 'https://discord.js.org',
        author: emb.author ?? {
            name: '',
            icon_url: 'https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500',
            url: 'https://discord.js.org',
        },
        description: emb.description ?? '',
        thumbnail: emb.thumbnail ?? {
            url: 'https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500',
        },
        fields: emb.fields ?? [
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
        image: emb.images ?? {
            url: 'https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500',
        },
        timestamp: emb.timestamp ?? new Date().toISOString(),
        footer: emb.footer ?? {
            text: '',
            icon_url: 'https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500',
        }
    };
}

module.exports = { createMyEmbed };