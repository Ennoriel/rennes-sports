import { writable } from 'svelte/store';
import type { Filter } from '$lib/types/sport.type';

export const state = writable({
	isOpen: false,
	filter: {} as Filter
});
