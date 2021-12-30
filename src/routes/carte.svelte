<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { sports } from '$lib/data/sports';
	import { locations } from '$lib/data/locations';
	import 'leaflet/dist/leaflet.css';
	import FilterPanel from '../lib/component/FilterPanel.svelte';
	import { Filter } from '$lib/types/sport.type';
	import { filterSports, getMarkers } from '$lib/utils/filter';
	import Menu from '../lib/component/Menu.svelte';
	import ResponsiveWrapper from '$lib/component/ResponsiveWrapper.svelte';
	import MenuMobile from '$lib/component/MenuMobile.svelte';

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

<ResponsiveWrapper>
	<MenuMobile slot="s" />
	<Menu slot="l" />
</ResponsiveWrapper>

<FilterPanel {onSubmit} />

<div class="map">
	{#if browser && window}
		<svelte:component this={LeafletContainer} {markers} />
	{/if}
</div>

<style>
	.map {
		height: calc(100vh - var(--header-height));
		width: 100vw;
		transition: all 0.4s;
	}
</style>
