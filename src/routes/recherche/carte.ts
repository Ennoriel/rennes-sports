import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { getMarkers } from '$lib/utils/filter';
import type { Sport } from '$lib/types/sport.type';
import type { WithId } from 'mongodb';
import type { Location } from '$lib/types/location.type';

type DSport = WithId<Document> & Sport;
type DLocation = WithId<Document> & Location;

export const get: RequestHandler = async () => {
	const locations =
		(await (await mongoClient).db()?.collection('locations').find().toArray()) || [];

	if (locations) {
		const sports = (await (await mongoClient).db()?.collection('sports').find().toArray()) || [];
		const markers = getMarkers(sports as Array<DSport>, locations as Array<DLocation>);

		return {
			body: { markers }
		};
	}

	return {
		status: 404
	};
};
