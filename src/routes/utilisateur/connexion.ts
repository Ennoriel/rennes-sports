import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import type { RequestHandler } from '@sveltejs/kit';
import { errorResponse } from '$lib/utils/query';

export const post: RequestHandler = async ({ request }) => {
	const body = await request.formData();
	const acceptsJson = request.headers.get('accept') == 'application/json';

	const email = body.get('email') as string;
	const password = body.get('password') as string;

	if (!email || !password) {
		return errorResponse(acceptsJson, 'Invalid credentials', 403);
	}

	const token = jwt.sign({ uid: '1234567890', email }, import.meta.env.VITE_JWT_SECRET as string);

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
					user: {
						email
					}
				}
		  }
		: {
				status: 302,
				headers: { ...headers, Location: '/recherche/liste' }
		  };
};
