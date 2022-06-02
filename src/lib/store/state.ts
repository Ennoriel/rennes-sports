import { derived, writable } from 'svelte/store';
import type { Filter, Sport } from '$lib/types/sport.type';

export const state = writable({
	allSports: [] as Array<Sport>,
	isOpen: false,
	isPin: true,
	isDoubleMenu: false,
	filter: {} as Filter
});

export const sports = derived(state, ($state) => $state.allSports);
