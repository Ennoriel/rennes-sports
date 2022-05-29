declare const _brcyptjs: typeof import('node_modules/@types/bcryptjs');

declare module 'bcryptjs' {
	export default _brcyptjs;
}
