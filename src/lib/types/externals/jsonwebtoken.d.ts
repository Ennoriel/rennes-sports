declare const _jwt: typeof import('node_modules/@types/jsonwebtoken');

declare module 'jsonwebtoken' {
	export default _jwt;
}
