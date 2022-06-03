import type { RequestHandler } from '@sveltejs/kit';
import { formDataToObject } from '$lib/utils/query';
import type { Filter } from '$lib/types/sport.type';
import { getSports } from '$lib/db/sport';
import { getLocations } from '$lib/db/location';
import type { ObjectId } from 'mongodb';
import { getMarkers } from '$lib/utils/filter';
import type { Location, Marker } from '$lib/types/location.type';

export const get: RequestHandler = async (event) => {
	const filter = formDataToObject<Filter>(event.url.searchParams);

	const sports = await getSports(filter, event.locals.session);

	let locations: Array<Location>;
	let markers: Array<Marker>;

	if (filter.mode === 'map' && sports.length) {
		const locationIds = sports
			.map(({ slots }) => slots.map((slot) => slot.location._id))
			.flat() as Array<ObjectId>;
		locations = await getLocations(locationIds);
		markers = getMarkers(sports, locations);
	}

	return {
		body: {
			sports,
			markers,
			filter
		}
	};
};
