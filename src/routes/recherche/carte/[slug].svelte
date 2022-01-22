<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		return {
			props: {
				locationId: Number.parseInt(params?.slug) ?? undefined
			}
		};
	}
</script>

<script>
	import Map from '$lib/component/Map.svelte';
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
