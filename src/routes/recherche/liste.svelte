<script context="module" lang="ts">
	import { loadSports } from './_load';
	export const load = loadSports;
</script>

<script>
	import FilterPanel from '$lib/component/FilterPanel.svelte';
	import { state, sports } from '$lib/store/state';
	import Title from '$lib/component/Title.svelte';
	import List from '$lib/component/List.svelte';
	import ResponsiveWrapper from '$lib/component/ResponsiveWrapper.svelte';
	import ListMobile from '$lib/component/ListMobile.svelte';

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
		<ListMobile slot="s" sports={$sports} />
		<List slot="l" sports={$sports} />
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
