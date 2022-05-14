import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: "@import './static/styles/_.scss';"
		}
	}),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
			crawl: true,
			entries: [
				'/en',
				'/en/portfolio',
				'/en/testing',
				'/en/testing/another',
				'/en/blog',
				'/zh',
				'/zh/portfolio',
				'/zh/testing',
				'/zh/testing/another',
				'/zh/blog',
			]
		},
		files: {
			assets: "./static",
			lib: "src/lib",
			routes: "src/routes",
			template: "src/app.html",
		},
		vite: {
			server: {
				fs: {
					allow: ["./static"]
				}
			}
		}
	},
};

export default config;
