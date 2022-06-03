import type { Load } from '@sveltejs/kit';

export const loadSports =
	(mode: string): Load =>
	async ({ fetch, url }) => {
		const { searchParams } = url;
		searchParams.append('mode', mode);

		const res = await fetch(`/api/sports/full?${searchParams.toString()}`);

		if (res.ok) {
			return {
				props: await res.json()
			};
		}
	};
