export type Sport = {
	assoName: string;
	website: string;
	fromYear: string[];
	sexe: string;
	sport: string;
	level: string;
	slots: Slot[];
};

export type Slot = {
	details: string;
	day: string;
	hour: string;
	location: string;
}