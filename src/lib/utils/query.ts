import type { Load, RequestHandler } from '@sveltejs/kit';
import { urlSearchParamsToString } from './url';
import { isStringANumber } from './number';
import { toObj } from 'form-data-to-object';
import { isStringABool } from './bool';

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

export const formDataToObject = <T>(formData: FormData): T => {
	const linearizedObject = [...formData.entries()].reduce((acc, [key, value]: [string, string]) => {
		if (value)
			acc[key] = isStringANumber(value)
				? parseFloat(value)
				: isStringABool(value)
				? value === 'true'
				: value;
		return acc;
	}, {} as any);

	return toObj<T>(linearizedObject);
};
