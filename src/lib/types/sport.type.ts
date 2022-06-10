import type { ObjectId } from 'mongodb';
import type { Bounds, Location } from './location.type';

export type Sport = {
	_id?: string | ObjectId;
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
	_id: string | ObjectId;
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
	location?: Location;
	associationId?: string;
	association?: Association;
	minutes?: RangeType;
	bounds?: Bounds;
};

export type RangeType = [number, number];
