<script lang="ts">
	// import { LeafletMap, TileLayer, Marker, Popup } from 'svelte-leafletjs';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { sports } from '$lib/data/sports';
	import { locations } from '$lib/data/locations';
	import { state } from '$lib/store/state';
	import 'leaflet/dist/leaflet.css';
	import FilterPanel from '../lib/component/FilterPanel.svelte';
	import { Filter } from '../lib/types/sport.type';
	import { filterSports, getMarkers } from '../lib/utils/filter';
	import Menu from '../lib/component/Menu.svelte';

	let rows = sports;

	let LeafletContainer;

	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('../lib/component/LeafletContainer.svelte')).default;
		}
	});

	let markers = getMarkers(sports, locations);

	function onSubmit(filter: Filter) {
		rows = filterSports(filter, sports);
		markers = getMarkers(rows, locations);
	}
</script>

<Menu/>

<FilterPanel onSubmit={onSubmit} />

<div class="example" class:isOpen={$state.isOpen}>
	{#if browser && window}
		<svelte:component this={LeafletContainer} {markers} />
	{/if}
</div>

<style>
	.example {
			height: calc(100vh - var(--header-height));
			width: 100vw;
			transition: all .4s;
	}
	.isOpen {
      width: calc(100vw - 300px);
			margin-left: 300px;
	}
</style>