import type { Filter, Sport } from '../types/sport.type';
import { hourRangeMongoQuery } from '../utils/time';
import { ObjectId } from 'mongodb';
import mongoClient from '../utils/db';
import { geoQueryCircle, geoQueryPolygon } from '../utils/geoquery';
import { uniqCities } from '../data/cities';

export async function getSports(filters: Filter, session: App.Locals['session']) {
	const { q, mode, sport, level, birthYear, sex, day, minutes, locationId, associationId, bounds } =
		filters;

	const query = {};

	if (q === 'my') query['association._id'] = new ObjectId(session._id);
	else if (q?.startsWith('_')) {
		const cityId = q.split('_')[1];
		const city = uniqCities.find((c) => c.id === cityId);
		if (city) query['slots.location.coordinates'] = geoQueryCircle(city.latitude, city.longitude);
	}
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
	if (mode === 'map' && bounds) query['slots.location.coordinates'] = geoQueryPolygon(bounds);

	return (await (await mongoClient).db()?.collection<Sport>('sports').find(query)?.toArray()) || [];
}
