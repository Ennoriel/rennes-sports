export function range(min: number, max: number): Array<number> {
	const trueMin = Math.min(min, max),
		trueMax = Math.max(min, max);
	const len = trueMax - trueMin + 1;
	const arr = new Array(len);
	for (let i = 0; i < len; i++) {
		arr[i] = min === trueMin ? trueMin + i : trueMax - i;
	}
	return arr;
}

export function uniqBy(a, key) {
	var seen = {};
	return a.filter(function (item) {
		var k = key(item);
		return seen.hasOwnProperty(k) ? false : (seen[k] = true);
	});
}
