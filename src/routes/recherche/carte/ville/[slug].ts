import { cities } from '$lib/data/cities';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const city = cities.find((city) => city.zipCode === params.slug);

	if (city) {
		return {
			body: { city }
		};
	}

	return {
		status: 404
	};
};
