import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/utils/db';
import type { InsertOneReturnType } from '../lib/types/mongo.type';
import { locations } from '../lib/data/locations';

export const get: RequestHandler = async () => {
	await (await mongoClient).db()?.collection('locations').deleteMany({});
	await (
		await mongoClient
	)
		.db()
		?.collection('locations')
		.insertMany(locations.map((l) => ({ name: l.name, coordinates: l.coordinates })));

	let savedLocations = await (await mongoClient).db()?.collection('locations').find({}).toArray();
	savedLocations = savedLocations.map((l) => ({
		...l,
		id: locations.find((ll) => ll.name === l.name)?.id
	}));

	const sports = (await (await mongoClient).db()?.collection('sports').find({})?.toArray()) || [];
	await (await mongoClient).db()?.collection('sports2').deleteMany({});
	await (await mongoClient).db()?.collection('sports2').insertMany(sports);

	sports.forEach((sport) => {
		sport.slots.forEach((slot) => {
			slot.location = {
				...savedLocations.find((l) => l.id === slot.locationId)
			};
			delete slot.location.id;
			delete slot.locationId;
		});
	});

	await Promise.all(
		sports.map(
			async (sport) =>
				await (await mongoClient)
					.db()
					?.collection('sports')
					.updateOne({ _id: sport._id }, { $set: sport })
		)
	);

	console.log(JSON.stringify(sports, null, 2));

	return {
		status: 200,
		body: sports
	};
};
