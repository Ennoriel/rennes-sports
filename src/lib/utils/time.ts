import { floor } from './number';
import type { RangeType } from '$lib/types/sport.type';
import type { Sport } from '$lib/types/sport.type';
import { DAYS } from '../data/days';

/**
 * Returns a text representation of an hour (ex: 510 = "8h30")
 * @param minutes
 */
export function displayTextHour(minutes: number): string {
	return `${Math.floor(minutes / 60)}h${(minutes % 60).toString().padEnd(2, '0')}`;
}

/**
 * Returns a decimal representation of an hour (ex: 510 (8h30) = 8.5)
 * @param minutes
 */
export function displayDecimalHour(minutes: number): number {
	return Math.floor(minutes / 60) + floor((minutes % 60) / 60, 2);
}

export function displayHours(minutes: RangeType): string {
	return `${displayTextHour(minutes[0])} - ${displayTextHour(minutes[1])}`;
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

export function getDayOrder(day?: string): number {
	if (!day) return 7;
	return DAYS.findIndex((d) => d === day);
}
