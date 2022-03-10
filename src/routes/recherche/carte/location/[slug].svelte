<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params }) => {
		return {
			props: {
				locationId: Number.parseInt(params?.slug) ?? undefined
			}
		};
	};
</script>

<script>
	import Map from '$lib/component/map/Map.svelte';
	import { onMount } from 'svelte';
	import { locations } from '$lib/data/locations';
	import { sports } from '$lib/data/sports';
	import { getMarkers } from '$lib/utils/filter';

	export let locationId;
	let markers;

	onMount(() => {
		markers = getMarkers(sports, locations).filter((marker) => marker.location.id === locationId);
	});
</script>

<Map {markers} />
