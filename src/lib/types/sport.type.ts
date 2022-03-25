export type Sport = {
	sport: string;
	birthYear: number[];
	adult: boolean;
	otherYear?: string;
	sex: string;
	level: string;
	assoId: number;
	slots: Slot[];
};

export type Slot = {
	details: string;
	day: string;
	hour: RangeType;
	locationId: number;
};

export type Filter = {
	sport?: string;
	level?: string;
	birthYear?: number;
	sex?: string[];
	day?: string[];
	locationId?: number;
	assoId?: number;
	minutes?: RangeType;
};

export type RangeType = [number, number];
