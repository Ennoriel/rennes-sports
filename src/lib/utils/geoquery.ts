import type { Bounds } from '../types/location.type';

export function geoQuery(bounds: Bounds) {
	return {
		$geoWithin: {
			$polygon: [
				[bounds.north, bounds.west],
				[bounds.north, bounds.east],
				[bounds.south, bounds.east],
				[bounds.south, bounds.west],
				[bounds.north, bounds.west]
			]
		}
	};
}
