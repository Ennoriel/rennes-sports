import type { Load, RequestHandler } from '@sveltejs/kit';
import { urlSearchParamsToString } from '$lib/utils/url';

export const errorResponse = (
	acceptsJson: boolean,
	message: string,
	status = 400,
	redirect = ''
): ReturnType<RequestHandler> =>
	acceptsJson
		? { status, body: { error: message } }
		: { status: 302, headers: { Location: `${redirect}?error=${message}` } };

export const parseUrlSearchParams: Load = async ({ url }) => {
	return {
		props: urlSearchParamsToString(url.searchParams)
	};
};
