import type { Bounds } from '../types/location.type';

export function geoQueryPolygon(bounds: Bounds) {
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

export function geoQueryCircle(latitude: number, longitude: number, radius = 0.1) {
	return {
		$geoWithin: {
			$center: [[latitude, longitude], radius]
		}
	};
}
