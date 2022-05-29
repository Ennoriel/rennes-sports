import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';

export const get: RequestHandler = async ({ locals }) => {
	if (locals.session?.role !== 'admin') {
		return {
			status: 302,
			headers: { Location: '/' }
		};
	}

	return {
		body: {
			users:
				(await (
					await mongoClient
				)
					.db()
					?.collection('associations')
					.find({}, { projection: { email: 1, role: 1, name: 1 } })
					?.toArray()) || []
		}
	};
};
