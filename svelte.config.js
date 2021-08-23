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
		paths: {
			base: '/rennes-sports'
		},
		prerender: {
			onError: 'continue'
		}
	}
};

export default config;
