import { cities } from '$lib/data/cities';

export async function get({ params }) {
	const city = cities.find((city) => city.zipCode === params.slug);

	if (city) {
		return {
			body: { city }
		};
	}

	return {
		status: 404
	};
}
