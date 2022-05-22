/**
 * Checks if the string value is a number or floating point number
 * @param value
 */
export const isStringANumber = (value: string): boolean => {
	return !isNaN(+value) && isFinite(+value);
};

/**
 * Floors a number with a giver precision
 * @param value
 * @param precision
 */
export function floor(value: number, precision: number): number {
	const div = Math.pow(10, precision);
	return Math.floor(value * div) / div;
}
