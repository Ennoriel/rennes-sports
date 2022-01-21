import { derived, writable } from 'svelte/store';
import type { Filter, Sport } from '$lib/types/sport.type';
import { filterSports, getMarkers } from '$lib/utils/filter';
import { locations } from '$lib/data/locations';

export const state = writable({
	allSports: [] as Array<Sport>,
	isOpen: false,
	filter: {} as Filter
});

export const sports = derived(state, ($state) => filterSports($state.filter, $state.allSports));
export const markers = derived(sports, ($sports) => getMarkers($sports, locations));
