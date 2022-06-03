import type { Sport } from '$lib/types/sport.type';
import type { ObjectId } from 'mongodb';

export type Coordinates = [number, number];

export type Location = {
	_id: string | ObjectId;
	name: string;
	address?: string;
	coordinates?: Coordinates;
};

export type GroupSport = {
	sportName: string;
	sports: Array<Sport>;
};

export type Marker = {
	location: Location;
	sports: Array<GroupSport>;
};

export type Metro = {
	name: string;
	color: string;
	stations: Array<{
		name: string;
		address: string;
		coordinates: Coordinates;
	}>;
};

export type AddressFeature = {
	type: string;
	geometry: {
		type: string;
		coordinates: Coordinates;
	};
	properties: {
		label: string;
		score: number;
		id: string;
		name: string;
		postcode: string;
		citycode: string;
		x: number;
		y: number;
		city: string;
		context: string;
		type: string;
		importance: number;
	};
};

export type Address = {
	type: string;
	version: string;
	features: Array<AddressFeature>;
	attribution: string;
	licence: string;
	query: string;
	filters: {
		type: string;
	};
	limit: number;
};
