<script context="module" lang="ts">
	import { loadSports } from './_load';
	export const load = loadSports('map');
</script>

<script lang="ts">
	import Map from '$lib/component/map/Map.svelte';
	import type { Marker } from '$lib/types/location.type';
	import type { Filter } from '$lib/types/sport.type';

	export let markers: Array<Marker>;
	export let filter: Filter;
</script>

<Map {markers} {filter} />
