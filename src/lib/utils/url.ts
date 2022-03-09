export function urlSearchParamsToString(params: URLSearchParams): Record<string, string> {
	return Object.fromEntries(params.entries());
}
