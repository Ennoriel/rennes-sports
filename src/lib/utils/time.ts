import type { HourRange } from '$lib/types/sport.type';

export function displayHour(minutes: number): string {
	return `${Math.floor(minutes / 60)}h${(minutes % 60).toString().padEnd(2, '0')}`;
}

export function displayHours(minutes: HourRange): string {
	return `${displayHour(minutes[0])} - ${displayHour(minutes[1])}`;
}

export function hourRangeOverlaps(rangeA: HourRange, rangeB: HourRange): boolean {
	if (rangeA[0] <= rangeB[0] && rangeB[0] <= rangeA[1]) return true; // b starts in a
	if (rangeA[0] <= rangeB[1] && rangeB[1] <= rangeA[1]) return true; // b ends in a
	if (rangeB[0] < rangeA[0] && rangeA[1] < rangeB[1]) return true; // a in b
	return false;
}
