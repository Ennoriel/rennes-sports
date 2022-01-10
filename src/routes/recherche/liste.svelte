<script lang="ts">
	import SvelteTable from 'svelte-table';
	import Row from '$lib/component/table/Row.svelte';
	import FilterPanel from '$lib/component/FilterPanel.svelte';
	import { state, sports } from '$lib/store/state';
	import Title from '$lib/component/Title.svelte';

	let pageRef;

	const columns = [
		{
			key: 'sport',
			title: 'sport',
			value: (v) => v.sport,
			sortable: true
		},
		{
			key: 'level',
			title: 'pratique',
			value: (v) => v.level,
			sortable: true
		},
		{
			key: 'year-sex',
			title: 'année de naissance - sexe',
			sortable: false
		},
		{
			key: 'slot',
			title: 'créneau',
			sortable: true
		},
		{
			key: 'location',
			title: 'Lieu',
			sortable: true
		},
		{
			key: 'assoName',
			title: 'association',
			value: (v) => v.assoName,
			sortable: true
		}
	];
</script>

<FilterPanel {pageRef} />

<div bind:this={pageRef} id="table" class:isPadded={$state.isOpen}>
	<Title>
		Résultats ({$sports.length})
	</Title>

	<SvelteTable {columns} rows={$sports}>
		<Row slot="row" let:row let:n {row} />
	</SvelteTable>
</div>

<style>
	#table :global(table) {
		width: calc(100% - 48px);
		border-collapse: separate;
		border-spacing: 0 8px;
		margin: 0 24px;
	}

	#table :global(thead tr) {
		font-size: 10px;
		text-transform: uppercase;
		color: #7f7f7f;

		position: sticky;
		background-color: var(--bg-color);
		top: 0;
	}

	#table :global(tbody td:not(:first-of-type)) {
		padding: 8px 0;
		min-height: 32px;
	}

	#table {
		transition: all 0.4s;
		height: calc(100vh - var(--header-height));
		overflow-y: auto;
	}
	#table.isPadded {
		padding-left: 300px;
	}

	@media (min-width: 720px) {
		#table:not(.isPadded) {
			width: 1000px;
			margin: auto;
		}
		#table.isPadded {
			width: calc(100% - 300px);
			margin: auto;
		}
	}
	@media (min-width: 1324px) {
		#table.isPadded {
			width: 1000px;
			margin: auto;
		}
	}

	#table :global(h1) {
		margin: 12px 0 12px 24px;
	}
</style>
