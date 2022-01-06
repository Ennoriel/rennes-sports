<script lang="ts">
	import { sports } from '$lib/data/sports';
	import SvelteTable from 'svelte-table';
	import Row from '$lib/component/table/Row.svelte';
	import FilterPanel from '$lib/component/FilterPanel.svelte';
	import { Filter } from '$lib/types/sport.type';
	import { state } from '$lib/store/state';
	import { filterSports } from '$lib/utils/filter';

	let pageRef;

	let rows = filterSports($state.filter, sports);

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

	function onSubmit(filter: Filter) {
		$state.filter = filter;
		rows = filterSports(filter, sports);
	}
</script>

<FilterPanel {onSubmit} {pageRef} />

<div bind:this={pageRef} id="table" class:isPadded={$state.isOpen}>
	<h1>
		Résultats ({rows.length})
	</h1>

	<SvelteTable {columns} {rows}>
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

	h1 {
		text-transform: uppercase;
		font-size: 16px;
		color: var(--main-color);
		font-weight: normal;
		margin: 12px 0 12px 24px;
	}
</style>
