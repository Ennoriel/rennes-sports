<script>
	import Map from '$lib/component/map/Map.svelte';

	export let location;
    export let markers;
</script>

<Map {markers} center={location.coordinates}/>
