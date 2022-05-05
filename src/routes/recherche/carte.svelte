<script lang="ts">
	import Map from '$lib/component/map/Map.svelte';
	import type { Marker } from '$lib/types/location.type';
	export let markers: Array<Marker>;
</script>

<Map {markers} />
