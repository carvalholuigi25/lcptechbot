function createMyEmbed(emb) {
    const thumbdef = { url: "https://dub01pap002files.storage.live.com/y4mTK9iStdQdh2ZzuaR6Fl3ZFEQjiNudFd0d2EKFLZmF6eqaxmG9JAiRIJAOdM4uvg1K9fD5btgk2M3rcG-msJdaV-tj9sTdxS8gdPVLfXwdZ8tCzVxQbAinvyZ-1LMqhdnlvZg2rEC9NKEFrraEHtTKUD9QcpBqVd_WmLlZIUUbs4sDYhXvr3n-YrdXx_AQpagDqgFzzHt5yZRpcB1vi1ACnIuUOlcMne1b8T8spViIIU?encodeFailures=1&width=500&height=500" };

    return {
        color: emb.color ?? 0x0099ff,
        title: emb.title ?? '',
        url: emb.url ?? '',
        author: emb.author ?? {},
        description: emb.description ?? '',
        thumbnail: emb.thumbnail ?? thumbdef,
        fields: emb.fields ?? [],
        image: emb.image ?? {},
        timestamp: emb.timestamp ?? new Date().toISOString(),
        footer: emb.footer ?? {}
    };
}

module.exports = { createMyEmbed };