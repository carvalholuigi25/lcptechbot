// src: https://old.discordjs.dev/#/docs/discord.js/14.13.0/class/Embed

export interface MyEmbeds {
    color: string;
    title: string;
    url?: string;
    author?: MyEmbedsAuthors;
    description?: string;
    thumbnail?: MyEmbedsThumbnails;
    fields?: MyEmbedsFields[];
    image?: MyEmbedsImages;
    timestamp?: string | Date;
    footer?: MyEmbedsFooter;
}

export interface MyEmbedsAuthors {
    name?: string;
    icon_url?: string;
    url?: string;
}

export interface MyEmbedsThumbnails {
    url?: string;
}

export interface MyEmbedsFields {
    name?: string;
    value?: string;
    inline?: boolean;
}

export interface MyEmbedsImages {
    url?: string;
}

export interface MyEmbedsFooter {
    text?: string;
    icon_url?: string;
}