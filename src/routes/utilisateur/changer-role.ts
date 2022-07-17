import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { ObjectId } from 'mongodb';

export const POST: RequestHandler = async ({ request, locals }) => {
	if (locals.session.role !== 'admin') {
		return {
			status: 302,
			headers: { Location: '/' }
		};
	}

	const { _id, role } = await request.json();

	const response = await (
		await mongoClient
	)
		.db()
		?.collection('associations')
		.updateOne({ _id: new ObjectId(_id) }, { $set: { role } });

	if (response.modifiedCount === 1) {
		return {
			status: 200,
			body: await (
				await mongoClient
			)
				.db()
				?.collection('associations')
				.findOne({ _id: new ObjectId(_id) })
		};
	} else {
		return {
			status: 400
		};
	}
};
