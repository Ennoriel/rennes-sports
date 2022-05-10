import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { urlSearchParamsToString } from '../../../lib/utils/url';

export const get: RequestHandler = async (event) => {
	const { filter } = urlSearchParamsToString(event.url.searchParams);
	const query = filter ? { sport: { $regex: filter, $options: 'i' } } : {};
	return {
		body: (await (await mongoClient).db()?.collection('sports').distinct('sport', query)) || []
	};
};
