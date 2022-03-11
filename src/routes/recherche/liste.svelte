<script context="module" lang="ts">
	import { loadSports } from './_load';
	export const load = loadSports;
</script>

<script>
	import FilterPanel from '$lib/component/panel/FilterPanel.svelte';
	import Title from '$lib/component/atom/Title.svelte';
	import ResponsiveWrapper from '$lib/component/layout/ResponsiveWrapper.svelte';
	import SportListDesktop from '$lib/component/list/SportListDesktop.svelte';
	import SportListMobile from '$lib/component/list/SportListMobile.svelte';
	import { state, sports } from '$lib/store/state';

	export let loadedSports = [];
	$: $state.allSports = loadedSports;

	let pageRef;
</script>

<FilterPanel {pageRef} />

<div bind:this={pageRef}>
	<Title>
		Résultats ({$sports.length})
	</Title>

	<ResponsiveWrapper>
		<SportListMobile slot="s" sports={$sports} />
		<SportListDesktop slot="l" sports={$sports} />
	</ResponsiveWrapper>
</div>

<style>
	div {
		margin: 16px 0 96px;
		min-height: calc(100vh - var(--header-height) - 16px - 96px);
	}

	div :global(h1) {
		margin: 0 16px;
	}
</style>
