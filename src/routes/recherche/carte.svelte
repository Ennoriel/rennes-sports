<script>
	import Map from '$lib/component/map/Map.svelte';
	// import { markers, state } from '$lib/store/state';

	// export let loadedSports = [];
	// $: $state.allSports = loadedSports;

    export let markers
</script>

<Map markers={markers} />
