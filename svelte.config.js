import adapter from '@sveltejs/adapter-static';
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
