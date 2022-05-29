import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import type { RequestHandler } from '@sveltejs/kit';
import { errorResponse } from '$lib/utils/query';
import { validate } from './_utils';
import mongoClient from '$lib/utils/db';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.formData();
	const acceptsJson = request.headers.get('accept') == 'application/json';

	const email = body.get('email') as string;
	const password = body.get('password') as string;

	if (!email || !password) {
		return errorResponse(acceptsJson, "L'identifiant ou le mot des passe est incorrect", 403);
	}

	const associations =
		(await (await mongoClient).db()?.collection('associations')?.find({ email })?.toArray()) || [];

	if (associations.length !== 1 || !validate(password, associations[0].hash)) {
		return errorResponse(acceptsJson, "L'identifiant ou le mot des passe est incorrect", 403);
	}

	const association = {
		_id: associations[0]._id,
		email: associations[0].email,
		role: associations[0].role,
		name: associations[0].name,
		website: associations[0].website
	};

	const token = jwt.sign(association, import.meta.env.VITE_JWT_SECRET as string);

	const headers = {
		'set-cookie': serialize('session', token, {
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
			sameSite: 'lax',
			secure: true,
			path: '/'
		})
	};

	return acceptsJson
		? {
				status: 200,
				headers,
				body: {
					association
				}
		  }
		: {
				status: 302,
				headers: { ...headers, Location: '/recherche/liste' }
		  };
};
