import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { urlSearchParamsToString } from '$lib/utils/url';

export const GET: RequestHandler = async (event) => {
	const { filter } = urlSearchParamsToString(event.url.searchParams);
	const query = filter ? { name: { $regex: filter, $options: 'i' } } : {};
	const projection = { name: 1, website: 1 };
	return {
		body:
			(await (await mongoClient)
				.db()
				?.collection('associations')
				.find(query, { projection })
				?.toArray()) || []
	};
};
