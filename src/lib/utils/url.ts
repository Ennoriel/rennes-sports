import { fromObj } from 'form-data-to-object';

export function urlSearchParamsToString(params: URLSearchParams): Record<string, string> {
	return Object.fromEntries(params.entries());
}

export function getUrl(url: URL, filter: Record<string, unknown> | undefined, reset = true) {
	const searchParams = reset ? new URLSearchParams() : url.searchParams;

	Object.entries(fromObj(filter || {}))
		.filter(([, v]) => !!v)
		.forEach(([k, v]) => {
			searchParams.set(k, v);
		});

	// dirty
	if (filter?.bounds) {
		searchParams.delete('q');
	}

	return new URL(`${url.origin}${url.pathname}/?${searchParams.toString()}`);
}
