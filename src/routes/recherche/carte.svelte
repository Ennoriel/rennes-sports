<script context="module" lang="ts">
	import { loadSports } from './_load';
	export const load = loadSports('map');
</script>

<script lang="ts">
	import Map from '$lib/component/map/Map.svelte';
	import type { Coordinates, Marker } from '$lib/types/location.type';
	import type { Filter } from '$lib/types/sport.type';
	import { uniqCities } from '../../lib/data/cities';

	export let markers: Array<Marker> = [];
	export let filter: Filter;

	let city = uniqCities.find((c) => c.id === filter.q?.split('_')?.[1]);
	let center: Coordinates | undefined = city && [city.latitude, city.longitude];
</script>

<Map {markers} {filter} {center} />
