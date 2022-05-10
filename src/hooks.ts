import { parse } from 'cookie';
import { verify } from 'jsonwebtoken';
import type { GetSession, Handle } from '@sveltejs/kit';
import type { LocalsSession } from '$lib/types/session.type';

const verifySession = (token: string): LocalsSession => {
	try {
		return verify(token, import.meta.env.VITE_JWT_SECRET as string) as unknown as LocalsSession;
	} catch (ex) {
		return null;
	}
};

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = parse(event.request.headers.get('cookie') || '');
	event.locals.session = verifySession(cookies.session);
	return resolve(event);
};

export const getSession: GetSession = async (event) => {
	return event.locals.session
		? {
				user: {
					email: event.locals.session.email,
					role: event.locals.session.role
				}
		  }
		: undefined;
};
