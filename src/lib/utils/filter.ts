import type { Sport } from '$lib/types/sport.type';
import type { Location, Marker } from '$lib/types/location.type';

export function getMarkers(sports: Array<Sport>, locations: Array<Location>): Array<Marker> {
	return locations
		.filter((location) => !!location.coordinates)
		.map((location) => {
			const locatedSports = sports.filter((sport) =>
				sport.slots.some(
					(slot) => (slot as any).location._id.toString() === (location as any)._id.toString()
				)
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
