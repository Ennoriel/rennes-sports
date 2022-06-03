import type { Location } from './location.type';

export type Sport = {
	sport: string;
	birthYear: number[];
	adult: boolean;
	otherYear?: string;
	sex: string;
	level: string;
	association: Association;
	slots: Slot[];
};

export type Association = {
	_id: string;
	name: string;
	website: string;
};

export type Slot = {
	details: string;
	day: string;
	hour: RangeType;
	location: Location;
};

export type Filter = {
	q?: string;
	mode?: string;
	sport?: string;
	level?: string;
	birthYear?: number;
	sex?: string[];
	day?: string[];
	locationId?: string;
	associationId?: string;
	minutes?: RangeType;
};

export type RangeType = [number, number];
