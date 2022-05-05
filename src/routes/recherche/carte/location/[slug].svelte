<script lang="ts">
	import Map from '$lib/component/map/Map.svelte';
	import type { Location, Marker } from '$lib/types/location.type';

	export let location: Location;
	export let markers: Array<Marker>;
</script>

<Map {markers} center={location.coordinates} />
