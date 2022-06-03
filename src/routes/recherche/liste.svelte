<script context="module" lang="ts">
	import { loadSports } from './_load';
	export const load = loadSports('list');
</script>

<script lang="ts">
	import FilterPanel from '$lib/component/panel/FilterPanel.svelte';
	import ResponsiveWrapper from '$lib/component/layout/ResponsiveWrapper.svelte';
	import SportListDesktop from '$lib/component/list/SportListDesktop.svelte';
	import SportListMobile from '$lib/component/list/SportListMobile.svelte';
	import type { Filter, Sport } from '../../lib/types/sport.type';

	export let sports: Array<Sport> = [];
	export let filter: Filter;

	let pageRef: HTMLElement;
</script>

<FilterPanel {pageRef} {filter} />

<div bind:this={pageRef}>
	<ResponsiveWrapper>
		<SportListMobile slot="s" {sports} />
		<SportListDesktop slot="l" {sports} />
	</ResponsiveWrapper>
</div>

<style>
	div {
		margin: 0;
		min-height: calc(100vh - var(--header-height));
	}

	div :global(h1) {
		margin: 0 16px;
	}
</style>
