import type { RequestHandler } from '@sveltejs/kit';
import { errorResponse, formDataToObject } from '$lib/utils/query';
import mongoClient from '$lib/utils/db';
import type { Location } from '$lib/types/location.type';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.formData();
	const acceptsJson = request.headers.get('accept') == 'application/json';

	const location = formDataToObject<Omit<Location, '_id'>>(body);

	const result = await (await mongoClient).db()?.collection('locations')?.insertOne(location);

	if (!result.insertedId) {
		return errorResponse(
			acceptsJson,
			"Une erreur est survenu lors de l'enregistrement du lieu. Merci de recommencer dans quelques minutes.",
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
