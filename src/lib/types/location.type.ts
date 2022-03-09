import type { Sport } from '$lib/types/sport.type';

export type Location = {
	id: number;
	name: string;
	coordinates?: [number, number];
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
	address: string;
	coordinates: [number, number];
};
