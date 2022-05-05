declare module 'form-data-to-object' {
	export function toObj<T>(formData: FormData): T;
	export function fromObj(record: Record<string, unknown> | string): FormData;
}
