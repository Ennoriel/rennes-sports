<script lang="ts">
	import type { City } from '$lib/types/city.type';
	import Map from '$lib/component/map/Map.svelte';

	export let city: City;
</script>

<Map markers={[]} center={[city.latitude, city.longitude]} />
