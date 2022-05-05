import type { RequestHandler } from '@sveltejs/kit';
import { errorResponse } from '$lib/utils/query';
import mongoClient from '$lib/utils/db';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.formData();
	const acceptsJson = request.headers.get('accept') == 'application/json';

	const name = body.get('name') as string;
	const address = body.get('address') as string;
	const coordinates = JSON.parse(body.get('coordinates') as string);

	const location = { name, address, coordinates };

	const result = await (await mongoClient).db()?.collection('locations')?.insertOne(location);
	console.log(result);

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
				headers: { Location: '/recherche/liste' } // FIXME goto my slots
		  };
};
