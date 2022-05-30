import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { urlSearchParamsToString } from '$lib/utils/url';
import { ObjectId } from 'mongodb';

export const get: RequestHandler = async (event) => {
	const { filter } = urlSearchParamsToString(event.url.searchParams);
	console.log(filter);
	const query =
		filter === 'my' ? { 'association._id': new ObjectId(event.locals.session._id) } : {};
	console.log(query);
	return {
		body: (await (await mongoClient).db()?.collection('sports').find(query)?.toArray()) || []
	};
};
