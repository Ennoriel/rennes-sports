import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { sports } from '$lib/data/sports';
import type { DeleteResultType, InsertOneReturnType } from '$lib/types/mongo.type';

export const get: RequestHandler = async () => {
	return {
		body: (await (await mongoClient).db()?.collection('sports').find({})?.toArray()) || []
	};
};

export const post: RequestHandler = async ({ request }) => {
	const body = await request.json();
	return {
		body: (await (await mongoClient)
			.db()
			?.collection('sports')
			?.insertOne(body)) as InsertOneReturnType
	};
};

export const del: RequestHandler = async () => {
	return {
		body: (await (await mongoClient).db()?.collection('sports')?.deleteMany({})) as DeleteResultType
	};
};

export const put: RequestHandler = async () => {
	await (await mongoClient).db()?.collection('sports')?.deleteMany({});
	await (await mongoClient).db()?.collection('sports')?.insertMany(sports);
	return {
		body: 0
	};
};
