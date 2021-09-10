import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			fallback: null
		}),
		target: '#svelte',
		appDir: 'internal',
		paths: {
			base: '/rennes-sports',
			assets: '/rennes-sports',
		},
		prerender: {
			onError: 'continue'
		}
	}
};

export default config;
