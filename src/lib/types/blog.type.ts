export type BlogListingRes = Omit<BlogListing, 'seq'>;

export interface BlogListing extends FrontMatter {
    slug: string;
}

export interface FrontMatter {
    title: string;
    desc: string;
    date: string;
    tags: string[];
    seq: number;
}

export interface BlogRes {
    metadata: {
        title: string;
        date: string;
        tags: string[];
        desc: string;
    };
    content: string;
}
