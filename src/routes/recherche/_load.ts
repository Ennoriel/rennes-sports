import type { Load } from '@sveltejs/kit';

export const loadSports: Load = async ({ fetch, url }) => {
	const res = await fetch(`/api/sports/full${url.search || ''}`);

	if (res.ok) {
		const loadedSports = await res.json();

		return {
			props: { loadedSports }
		};
	}
};
