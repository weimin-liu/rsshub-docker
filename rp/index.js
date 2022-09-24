const parser = require('@/utils/rss-parser');

module.exports = async (ctx) => {
    const url = ctx.params.url.replace(/_/g, "/");
    let feeds = await parser.parseURL(url);

    ctx.state.data = {
        title: feeds.title,
        link: url,
	item: feeds.items.map((item) => ({
            title: item.title,
            description: item.content,
            pubDate: item.pubDate,
            link: item.link,
            author: item.creator,
        })),
    };
};
