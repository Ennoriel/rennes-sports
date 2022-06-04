import { fromObj } from 'form-data-to-object';

export function urlSearchParamsToString(params: URLSearchParams): Record<string, string> {
	return Object.fromEntries(params.entries());
}

export function getUrl(url: URL, filter: Record<string, any> | undefined, reset = true) {
	const searchParams = reset ? new URLSearchParams() : url.searchParams;

	Object.entries(fromObj(filter || {}))
		.filter(([_, v]) => !!v)
		.forEach(([k, v]) => {
			searchParams.set(k, v);
		});

	return new URL(`${url.origin}${url.pathname}/?${searchParams.toString()}`);
}
