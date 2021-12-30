export function getHost(): string {
	return process.env.NODE_ENV === 'development' ? '' : '/rennes-sports';
}
