import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			fallback: null
		}),
		target: '#svelte'
	}
};

export default config;
