export interface Embeds {
    color: string;
    title: string;
    url?: string;
    author?: EmbedsAuthors;
    description?: string;
    thumbnail?: EmbedsThumbnails;
    fields?: EmbedsFields[];
    images?: EmbedsImages;
    timestamp?: string | Date;
    footer?: EmbedsFooter;
}

export interface EmbedsAuthors {
    name?: string;
    icon_url?: string;
    url?: string;
}

export interface EmbedsThumbnails {
    url?: string;
}

export interface EmbedsFields {
    name?: string;
    value?: string;
    inline?: boolean;
}

export interface EmbedsImages {
    url?: string;
}

export interface EmbedsFooter {
    text?: string;
    icon_url?: string;
}