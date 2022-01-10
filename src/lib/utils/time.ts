import type { RangeType } from '$lib/types/sport.type';
import type { Sport } from '$lib/types/sport.type';

export function displayHour(minutes: number): string {
	return `${Math.floor(minutes / 60)}h${(minutes % 60).toString().padEnd(2, '0')}`;
}

export function displayHours(minutes: RangeType): string {
	return `${displayHour(minutes[0])} - ${displayHour(minutes[1])}`;
}

export function hourRangeOverlaps(rangeA: RangeType, rangeB: RangeType): boolean {
	if (rangeA[0] <= rangeB[0] && rangeB[0] <= rangeA[1]) return true; // b starts in a
	if (rangeA[0] <= rangeB[1] && rangeB[1] <= rangeA[1]) return true; // b ends in a
	if (rangeB[0] < rangeA[0] && rangeA[1] < rangeB[1]) return true; // a in b
	return false;
}

export function displayYear(
	birthYear: Sport['birthYear'],
	otherYear: Sport['otherYear'],
	adult: Sport['adult']
): string {
	if (birthYear.length === 0) {
		return otherYear;
	} else if (birthYear.length === 1) {
		return birthYear[0].toString();
	} else {
		return `${adult ? 'Adultes (≤ 2003)' : birthYear[0].toString()} à ${
			birthYear[birthYear.length - 1]
		}`;
	}
}
