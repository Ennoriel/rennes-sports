import { derived, writable } from 'svelte/store';
import type { Filter } from '$lib/types/sport.type';
import { filterSports, getMarkers } from '$lib/utils/filter';
import { sports as allSports } from '$lib/data/sports';
import { locations } from '$lib/data/locations';

export const state = writable({
	isOpen: false,
	filter: {} as Filter
});

export const sports = derived(state, ($state) => filterSports($state.filter, allSports));
export const markers = derived(sports, ($sports) => getMarkers($sports, locations));
