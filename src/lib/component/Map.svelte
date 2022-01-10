<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import 'leaflet/dist/leaflet.css';
	import FilterPanel from '$lib/component/FilterPanel.svelte';

	export let markers;

	let pageRef;
	let LeafletContainer;

	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('$lib/component/LeafletContainer.svelte')).default;
		}
	});
</script>

<FilterPanel {pageRef} />

<div bind:this={pageRef} id="map">
	{#if browser && window}
		<svelte:component this={LeafletContainer} {markers} />
	{/if}
</div>

<style>
	#map {
		height: calc(100vh - var(--header-height));
		width: 100vw;
		transition: all 0.4s;
	}
</style>
