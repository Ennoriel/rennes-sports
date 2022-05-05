export const isStringANumber = (value: string): boolean => {
	return !isNaN(+value) && isFinite(+value);
};
