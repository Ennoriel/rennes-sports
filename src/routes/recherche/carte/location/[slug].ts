import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { ObjectId } from 'mongodb';
import { getMarkers } from '$lib/utils/filter';
import type { Sport } from '$lib/types/sport.type';
import type { Location } from '$lib/types/location.type';
import type { WithId } from 'mongodb';

type DSport = WithId<Document> & Sport;

export const get: RequestHandler = async ({ params }) => {
	const _id = new ObjectId(params.slug);
	const location = await (await mongoClient).db()?.collection('locations').findOne({ _id });

	if (location) {
		const sports = ((await (await mongoClient)
			.db()
			?.collection('sports')
			.find({ 'slots.location._id': _id })
			.toArray()) || []) as Array<DSport>;
		const markers = getMarkers(sports, [location as WithId<Document> & Location]);

		return {
			body: { location, markers }
		};
	}

	return {
		status: 404
	};
};
