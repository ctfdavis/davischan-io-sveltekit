import fs from 'fs/promises';
import type {RequestHandler} from "@sveltejs/kit";

const getTesting = async () => {
    try {
        const files = await fs.readdir('static/blogs');
        if (files.length) {
            return 'has length';
        }
        return 'has no length'
    } catch (err) {
        return err;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const get: RequestHandler = async () => {
    const vm = await getTesting();
    if (vm) {
        return {
            status: 200,
            body: {vm}
        };
    }

    return {
        status: 500
    };
}
