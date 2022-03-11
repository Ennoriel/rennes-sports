import type { RequestHandler } from '@sveltejs/kit';
import { errorResponse } from '$lib/utils/query';
import mongoClient from '$lib/utils/db';
import { crypt } from './_utils';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.formData();
	const acceptsJson = request.headers.get('accept') == 'application/json';

	const email = body.get('email') as string;
	const password = body.get('password') as string;
	const association = body.get('association') as string;
	const role = 'user';

	if (!email || !password || !association) {
		return errorResponse(acceptsJson, 'Toutes les informations sont obligatoires', 403);
	}

	const users =
		(await (await mongoClient).db()?.collection('users').find({ email })?.toArray()) || [];

	if (users.length) {
		return errorResponse(acceptsJson, `Un compte avec l'email ${email} existe déjà !`, 403);
	}

	const hash = crypt(password);

	const result = await (await mongoClient)
		.db()
		?.collection('users')
		?.insertOne({ email, hash, association, role });

	if (!result.insertedId) {
		return errorResponse(
			acceptsJson,
			'Une erreur est survenu lors de la création de votre compte. Merci de recommencer dans quelques minutes.'
		);
	}

	return acceptsJson
		? {
				status: 200
		  }
		: {
				status: 302,
				headers: { Location: '/utilisateur/connexion' }
		  };
};
