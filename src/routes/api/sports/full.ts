import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import { ObjectId } from 'mongodb';
import { formDataToObject } from '$lib/utils/query';
import { hourRangeMongoQuery } from '../../../lib/utils/time';

export const get: RequestHandler = async (event) => {
	const { filter, sport, level, birthYear, sex, day, minutes, locationId, associationId } =
		formDataToObject(event.url.searchParams);
	console.log({ filter, sport, level, birthYear, sex, day, minutes, locationId, associationId });

	let query = {};

	if (filter === 'my') query['association._id'] = new ObjectId(event.locals.session._id);
	if (sport) query['sport'] = sport;
	if (level) query['level'] = level;
	if (birthYear) query['birthYear'] = birthYear;
	if (sex) query['sex'] = { $in: sex };
	if (day?.length && minutes) {
		query['slots'] = hourRangeMongoQuery(minutes, day);
	} else {
		if (day?.length) query['slots.day'] = { $in: day };
		if (minutes) query['slots'] = hourRangeMongoQuery(minutes);
	}
	if (locationId) query['slots.location._id'] = new ObjectId(locationId);
	if (associationId) query['association._id'] = new ObjectId(associationId);

	console.log(JSON.stringify(query, null, 2));

	return {
		body: (await (await mongoClient).db()?.collection('sports').find(query)?.toArray()) || []
	};
};
