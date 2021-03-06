import type { RequestHandler } from '@sveltejs/kit';
import { errorResponse, formDataToObject } from '$lib/utils/query';
import mongoClient from '$lib/utils/db';
import type { InsertOneReturnType } from '$lib/types/mongo.type';
import type { Sport } from '$lib/types/sport.type';
import { ObjectId } from 'mongodb';

export const POST: RequestHandler = async ({ locals, request }) => {
	const body = await request.formData();
	const acceptsJson = request.headers.get('accept') == 'application/json';

	const sport = formDataToObject<Omit<Sport, '_id'>>(body);

	if (sport.birthYear) {
		sport.birthYear = [...new Array(sport.birthYear[1] - sport.birthYear[0] + 1)].map(
			(_, i) => sport.birthYear[0] + i
		);
	}

	sport.association = {
		_id: new ObjectId(locals.session._id) as unknown as string,
		name: locals.session.name,
		website: locals.session.website
	};

	sport.slots = sport.slots.map(({ location, ...slot }) => ({
		...slot,
		location: { ...location, _id: new ObjectId(location._id) }
	}));

	const result = (await (await mongoClient)
		.db()
		?.collection('sports')
		?.insertOne(sport)) as InsertOneReturnType;

	if (!result.insertedId) {
		return errorResponse(
			acceptsJson,
			"Une erreur est survenu lors de l'enregistrement du sport. Merci de recommencer dans quelques minutes.",
			403
		);
	}

	return acceptsJson
		? {
				status: 200
		  }
		: {
				status: 302,
				headers: { Location: '/recherche/liste' }
		  };
};
