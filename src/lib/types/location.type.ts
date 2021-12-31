import type { Sport } from '$lib/types/sport.type';

export type Location = {
	id: number;
	name: string;
	coordinates?: [number, number];
};

export type Marker = {
	location: Location;
	sports: Array<Sport>;
};
