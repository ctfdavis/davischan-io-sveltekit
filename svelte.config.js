import adapter from '@sveltejs/adapter-auto';
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
			assets: "static",
			lib: "src/lib",
			routes: "src/routes",
			template: "src/app.html",
		},
	}
};

export default config;
