export function isFormDataEntryValueAFile(value: FormDataEntryValue): value is File {
	return value instanceof File;
}
