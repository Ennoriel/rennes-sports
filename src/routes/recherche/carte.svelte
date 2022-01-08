<script>
	import Map from "$lib/component/Map.svelte";
    import { markers } from '$lib/store/state';
</script>

<Map markers={$markers}/>