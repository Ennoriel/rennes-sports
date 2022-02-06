import type { Load } from '@sveltejs/kit';

export const loadSports: Load = async ({ fetch }) => {
	const res = await fetch('/api/sports.json');

	if (res.ok) {
		const loadedSports = await res.json();

		return {
			props: { loadedSports }
		};
	}
};