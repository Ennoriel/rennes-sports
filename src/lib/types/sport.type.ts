export type Sport = {
	assoName: string;
	website: string;
	birthYear: number[];
	adult: boolean;
	otherYear?: string;
	sex: string;
	sport: string;
	level: string;
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
	sex?: string;
	day?: string[];
	locationId?: number;
	assoName?: string;
	minutes?: RangeType;
};

export type RangeType = [number, number];
