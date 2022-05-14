import fs from 'fs/promises';
import fm from 'front-matter';
import path from 'path';
import type {RequestHandler} from "@sveltejs/kit";
import type {BlogListing, FrontMatter, BlogListingRes} from "$lib/types/blog.type";

const removeMdExt = (filename: string) => {
    return filename.replace(new RegExp('.md$'), '');
}

const getBlogListing = async () => {
    const blogListing: BlogListing[] = [];
    try {
        const files = await fs.readdir('static/blogs');
        for (const filename of files) {
            const blogFile = path.join('static/blogs', filename);
            const content = await fs.readFile(blogFile, 'utf8');
            const { seq, tags } = fm<FrontMatter>(content).attributes;
            let i = 0;
            for (let j = 0; j < blogListing.length; j++) {
                if (seq > blogListing[i].seq) break;
                i++;
            }
            blogListing.splice(i, 0, {slug: removeMdExt(filename), ...fm<FrontMatter>(content).attributes});
        }
        return blogListing.map((blog): BlogListingRes => {
            const {seq, ...rest} = blog;
            return rest;
        });
    } catch (err) {
        console.log('Unable to scan directory or read file: ' + err);
        return null;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const get: RequestHandler = async () => {
    const vm = await getBlogListing();
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
