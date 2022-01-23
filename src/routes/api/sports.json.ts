import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';

export const get: RequestHandler = async () => {
	return {
		body: await (await mongoClient).db()?.collection('sports').find({})?.toArray() || []
	};
};

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	return {
		body: await (await mongoClient).db()?.collection('sports')?.insertOne(body) as Record<string, any>
	};
};

export const del: RequestHandler = async () => {
	return {
		body: await (await mongoClient).db()?.collection('sports')?.deleteMany({}) as Record<string, any>
	};
};
