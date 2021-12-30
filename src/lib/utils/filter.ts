import type { Filter, Sport } from '$lib/types/sport.type';
import { hourRangeOverlaps } from '$lib/utils/time';
import type { Location } from '$lib/types/location.type';

export function filterSports(filter: Filter, sports: Array<Sport>): Array<Sport> {
	return sports
		.filter((sport) => !filter.sport || sport.sport === filter.sport)
		.filter((sport) => !filter.level || sport.level === filter.level)
		.filter(
			(sport) =>
				!filter.birthYear ||
				sport.birthYear.includes(filter.birthYear) ||
				(sport.adult && filter.birthYear <= 2003)
		)
		.filter(
			(sport) =>
				!filter.sex ||
				sport.sex === filter.sex ||
				(['Féminin', 'Masculin'].includes(filter.sex) && sport.sex === 'Mixte')
		)
		.filter(
			(sport) =>
				!filter.day ||
				!filter.day.length ||
				sport.slots.some((slot) => filter.day.includes(slot.day))
		)
		.filter(
			(sport) =>
				!filter.minutes || sport.slots.some((slot) => hourRangeOverlaps(slot.hour, filter.minutes))
		)
		.filter(
			(sport) =>
				!filter.locationId || sport.slots.some((slot) => slot.locationId === filter.locationId)
		)
		.filter((sport) => !filter.assoName || sport.assoName === filter.assoName);
}

export function getMarkers(sports: Array<Sport>, locations: Array<Location>): any {
	return locations
		.filter((location) => !!location.coordinates)
		.filter((location) =>
			sports.some((sport) => sport.slots.some((slot) => slot.locationId === location.id))
		)
		.map((location) => ({
			location,
			sports: sports.filter((sport) => sport.slots.some((slot) => slot.locationId === location.id))
		}));
}
