import type { RequestHandler } from '@sveltejs/kit';
import mongoUtil from '$lib/utils/db';

export const get: RequestHandler = async () => {
	return {
		body: await mongoUtil.db?.collection('sports').find({})?.toArray()
	};
};

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	return {
		body: await mongoUtil.db?.collection('sports')?.insertOne(body) as Record<string, any>
	};
};

export const del: RequestHandler = async () => {
	return {
		body: await mongoUtil.db?.collection('sports')?.deleteMany({}) as Record<string, any>
	};
};
