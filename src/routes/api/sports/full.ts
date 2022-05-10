import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';

export const get: RequestHandler = async () => {
	return {
		body: (await (await mongoClient).db()?.collection('sports').find({})?.toArray()) || []
	};
};
