import { derived, writable } from 'svelte/store';
import type { Filter, Sport } from '$lib/types/sport.type';
import { filterSports } from '$lib/utils/filter';

export const state = writable({
	allSports: [] as Array<Sport>,
	isOpen: false,
	isPin: true,
	isDoubleMenu: false,
	filter: {} as Filter
});

export const sports = derived(state, ($state) => filterSports($state.filter, $state.allSports));
