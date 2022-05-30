<script lang="ts">
	import { state } from '$lib/store/state';
	import SvelteTable from 'svelte-table';
	import Row from '$lib/component/list/Row.svelte';
	import type { Sport } from '$lib/types/sport.type';
	import { icons } from '$lib/component/atom/TableOrderIcons';
	import Title from '../atom/Title.svelte';

	export let sports: Array<Sport>;

	const columns = [
		{
			key: 'sport',
			title: 'sport',
			value: (v: Sport) => v.sport,
			sortable: true
		},
		{
			key: 'level',
			title: 'pratique',
			value: (v: Sport) => v.level,
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
			sortable: true
		}
	];

	$: topp = $state.isPin ? ($state.isDoubleMenu ? '100px' : '60px') : '0px';
</script>

<div id="table-sports" class:sided={$state.isOpen} style:--top={topp}>
	<Title>
		Résultats ({sports.length})
	</Title>

	<SvelteTable
		{columns}
		rows={sports}
		sortOrders={[1, -1, 0]}
		iconSortable={icons.sortable}
		iconAsc={icons.asc}
		iconDesc={icons.desc}
	>
		<Row slot="row" let:row {row} />
	</SvelteTable>
</div>

<style>
	#table-sports {
		margin-top: calc(var(--top) + 20px);
		margin-bottom: 64px;
		transition: all 0.4s;
		padding-left: 0;
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
		transition: top 0.4s;
		top: var(--top);
		height: 32px;
	}

	#table-sports :global(tbody td:not(:first-of-type)) {
		padding: 8px 0;
		min-height: 32px;
	}

	@media (min-width: 1000px) {
		#table-sports {
			width: 1000px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (min-width: 900px) {
		#table-sports.sided {
			padding-left: 300px;
			width: 100%;
		}
	}

	@media (min-width: 1300px) {
		#table-sports.sided {
			width: 1300px;
		}
	}
</style>
