import Md from 'markdown-it';
import prism from 'markdown-it-prism';
import mdFrontMatter from 'markdown-it-front-matter';
import mila from 'markdown-it-link-attributes';
import type {RequestHandler} from "@sveltejs/kit";
import fs from "fs/promises";
import path from "path";
import fm from "front-matter";
import type {
    BlogRes,
    FrontMatter
} from "../../../lib/types/blog.type";

const md = new Md();
md.use(mdFrontMatter, () => {return;}).use(mila, {
    attrs: {
        target: "_blank",
        rel: "noopener noreferrer",
    },
}).use(prism);

const getBlog = async (slug: string) => {
    try {
        const filename = `${slug}.md`;
        const blogFile = path.join('static/blogs', filename);
        const content = await fs.readFile(blogFile, 'utf8');
        const {seq, ...metadata} = fm<FrontMatter>(content).attributes;
        const renderedContent = md.render(content);
        return {metadata, content: renderedContent};
    } catch (err) {
        console.log('Unable to read file: ' + err);
        return null;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const get: RequestHandler = async ({params}) => {
    const vm: BlogRes | null = await getBlog(params.slug);

    if (vm) {
        return {
            status: 200,
            body: {vm}
        };
    }

    return {
        status: 404
    };
}
