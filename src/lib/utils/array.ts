export function range(min: number, max: number): Array<number> {
	const trueMin = Math.min(min, max);
	const trueMax = Math.max(min, max);
	const len = trueMax - trueMin + 1;
	const arr = new Array(len);
	for (let i = 0; i < len; i++) {
		arr[i] = min === trueMin ? trueMin + i : trueMax - i;
	}
	return arr;
}

export function uniqBy<T>(array: Array<T>, key: (T) => string): Array<T> {
	const seen = {};
	return array.filter(function (item) {
		const k = key(item);
		return Object.prototype.hasOwnProperty.call(seen, k) ? false : (seen[k] = true);
	});
}
