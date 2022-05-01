import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const headers = {
		'set-cookie':
			'session=logged out; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; HttpOnly'
	};

	return {
		status: 302,
		headers: { ...headers, Location: '/' }
	};
};
