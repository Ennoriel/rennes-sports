import type { Filter, Sport } from '$lib/types/sport.type';
import { hourRangeOverlaps } from '$lib/utils/time';
import type { Location, Marker } from '$lib/types/location.type';

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
		.filter((sport) => !filter.assoId || sport.assoId === filter.assoId);
}

export function getMarkers(sports: Array<Sport>, locations: Array<Location>): Array<Marker> {
	return locations
		.filter((location) => !!location.coordinates)
		.filter((location) =>
			sports.some((sport) => sport.slots.some((slot) => slot.locationId === location.id))
		)
		.map((location) => {
			const locatedSports = sports.filter((sport) =>
				sport.slots.some((slot) => slot.locationId === location.id)
			);
			const groupedSports: Map<string, Array<Sport>> = locatedSports.reduce(
				(acc, s) => (
					acc.get(s.sport) ? acc.set(s.sport, [...acc.get(s.sport), s]) : acc.set(s.sport, [s]), acc
				),
				new Map()
			);
			return {
				location,
				sports: [...groupedSports.entries()].map(([sportName, sports]) => ({ sportName, sports }))
			};
		});
}
