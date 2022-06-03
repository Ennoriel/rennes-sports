import type { ObjectId } from 'mongodb';
import mongoClient from '../utils/db';
import type { Location } from '../types/location.type';

export async function getLocations(ids: Array<ObjectId>) {
	const query = {
		_id: {
			$in: ids
		}
	};

	return (
		(await (await mongoClient).db()?.collection<Location>('locations').find(query)?.toArray()) || []
	);
}
