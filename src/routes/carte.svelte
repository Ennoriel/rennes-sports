<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { sports } from '$lib/data/sports';
	import { locations } from '$lib/data/locations';
	import 'leaflet/dist/leaflet.css';
	import FilterPanel from '../lib/component/FilterPanel.svelte';
	import { Filter } from '$lib/types/sport.type';
	import { filterSports, getMarkers } from '$lib/utils/filter';
	import { state } from '$lib/store/state';

	let pageRef;
	let LeafletContainer;

	let rows = filterSports($state.filter, sports);
	let markers = getMarkers(rows, locations);

	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('../lib/component/LeafletContainer.svelte')).default;
		}
	});

	function onSubmit(filter: Filter) {
		$state.filter = filter;
		rows = filterSports(filter, sports);
		markers = getMarkers(rows, locations);
	}
</script>

<FilterPanel {onSubmit} {pageRef} />

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
