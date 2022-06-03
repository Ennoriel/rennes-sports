import { ObjectId } from 'mongodb';
import mongoClient from '../utils/db';
import type { Association } from '../types/sport.type';

export async function getAssociation(id: string | ObjectId) {
	const query = {
		_id: typeof id === 'string' ? new ObjectId(id) : id
	};

	return (await mongoClient)
		.db()
		.collection<Association>('associations')
		.findOne(query, {
			projection: {
				name: 1,
				website: 1
			}
		});
}
