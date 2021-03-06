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

/** deprecated */
export const parseUrlSearchParams: Load = async ({ url }) => {
	return {
		props: urlSearchParamsToString(url.searchParams)
	};
};

/**
 * Transforms a FormData object to a plain js object based on the keys. Check tests for complete rules
 * @param formData FormData object
 */
export const formDataToObject = <T>(formData: FormData | URLSearchParams): T => {
	const linearizedObject = [...formData.entries()].reduce((acc, [key, value]) => {
		let strValue = value as string;
		let parsedValue: string | boolean | number;
		if (value) {
			parsedValue = isStringANumber(strValue)
				? parseFloat(strValue)
				: isStringABool(strValue)
				? strValue === 'true'
				: strValue;
			if (!(key in acc)) {
				acc[key] = parsedValue;
			} else if (Array.isArray(acc[key])) {
				acc[key].push(parsedValue);
			} else {
				acc[key] = [acc[key], parsedValue];
			}
		}
		return acc;
	}, {} as any);

	return toObj<T>(linearizedObject);
};
