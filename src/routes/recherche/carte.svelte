<script context="module" lang="ts">
    import {loadSports} from "./_load";
    export const load = loadSports
</script>

<script>
	import Map from '$lib/component/Map.svelte';
    import {markers, state} from '$lib/store/state';

    export let loadedSports = []
    $: $state.allSports = loadedSports
</script>

<Map markers={$markers} />
