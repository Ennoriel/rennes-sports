import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { urlSearchParamsToString } from '$lib/utils/url';

export const GET: RequestHandler = async (event) => {
	const { filter } = urlSearchParamsToString(event.url.searchParams);
	const query = filter ? { name: { $regex: filter, $options: 'i' } } : {};
	return {
		body: (await (await mongoClient).db()?.collection('locations').find(query)?.toArray()) || []
	};
};
