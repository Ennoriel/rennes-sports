<script lang="ts">
	import SvelteTable from 'svelte-table';
	import Row from '$lib/component/list/Row.svelte';
	import type { Sport } from '$lib/types/sport.type';
	import { icons } from '$lib/component/atom/TableOrderIcons';

	export let sports: Array<Sport>;

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

<div id="table-sports">
	<SvelteTable
		{columns}
		rows={sports}
		sortOrders={[1, -1, 0]}
		iconSortable={icons.sortable}
		iconAsc={icons.asc}
		iconDesc={icons.desc}
	>
		<Row slot="row" let:row let:n {row} />
	</SvelteTable>
</div>

<style>
	#table-sports {
		transition: all 0.4s;
		overflow-y: auto;
	}

	#table-sports :global(table) {
		width: calc(100% - 48px);
		border-collapse: separate;
		border-spacing: 0 8px;
		margin: 0 24px;
	}

	#table-sports :global(thead tr) {
		font-size: 10px;
		text-transform: uppercase;
		color: #7f7f7f;
		user-select: none;
		position: sticky;
		background-color: var(--bg-color);
		top: 0;
	}

	#table-sports :global(tbody td:not(:first-of-type)) {
		padding: 8px 0;
		min-height: 32px;
	}

	@media (min-width: 1000px) {
		#table-sports {
			width: 1000px;
			margin: auto;
		}
	}

	#table-sports :global(h1) {
		margin: 12px 0 12px 24px;
	}
</style>
