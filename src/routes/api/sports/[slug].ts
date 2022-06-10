import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { ObjectId } from 'mongodb';

export const del: RequestHandler = async ({ locals, params }) => {
	if (locals.session?.role !== 'admin') {
		return {
			status: 302,
			headers: { Location: '/' }
		};
	}

	const _id = new ObjectId(params.slug);

	await (await mongoClient).db()?.collection('sports').deleteOne({ _id });

	return {
		status: 200
	};
};
