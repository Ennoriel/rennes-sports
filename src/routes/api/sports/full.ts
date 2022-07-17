import type { RequestHandler } from '@sveltejs/kit';
import { formDataToObject } from '$lib/utils/query';
import type { Filter } from '$lib/types/sport.type';
import { getSports } from '$lib/db/sport';
import { getLocations } from '$lib/db/location';
import { ObjectId } from 'mongodb';
import { getMarkers } from '$lib/utils/filter';
import type { Location, Marker } from '$lib/types/location.type';
import { getAssociation } from '../../../lib/db/association';

export const GET: RequestHandler = async (event) => {
	const filter = formDataToObject<Filter>(event.url.searchParams);

	const sports = await getSports(filter, event.locals.session);

	let locations: Array<Location>;
	let markers: Array<Marker> = [];

	if (filter.mode === 'map' && sports.length) {
		const locationIds = sports
			.map(({ slots }) => slots.map((slot) => slot.location._id))
			.flat() as Array<ObjectId>;
		locations = await getLocations(locationIds);
		markers = getMarkers(sports, locations);
	}

	if (filter.locationId) {
		filter.location = (await getLocations([new ObjectId(filter.locationId)]))?.[0];
	}

	if (filter.associationId) {
		filter.association = await getAssociation(filter.associationId);
	}

	return {
		body: {
			sports,
			markers,
			filter
		}
	};
};
