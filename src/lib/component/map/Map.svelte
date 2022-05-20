<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import 'leaflet/dist/leaflet.css';
	import FilterPanel from '$lib/component/panel/FilterPanel.svelte';
	import type { Coordinates, Marker } from '$lib/types/location.type';

	export let markers: Array<Marker>;
	export let center: Coordinates | undefined = undefined;

	let pageRef: HTMLElement;
	let LeafletContainer: any;

	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('$lib/component/map/LeafletContainer.svelte')).default;
		}
	});
</script>

<FilterPanel {pageRef} />

<div bind:this={pageRef} id="map">
	{#if browser && window}
		<svelte:component this={LeafletContainer} {markers} {center} />
	{/if}
</div>

<style>
	#map {
		margin-top: var(--header-height);
		height: calc(100vh - var(--header-height));
		width: 100vw;
		transition: all 0.4s;
	}
</style>
