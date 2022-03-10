<script lang="ts">
	import SvelteTable from 'svelte-table';
	import Row from '$lib/component/table/Row.svelte';
	import type { Sport } from '$lib/types/sport.type';

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

<div id="table">
	<SvelteTable
		{columns}
		rows={sports}
		sortOrders={[1, -1, 0]}
		iconSortable={`<svg style="width: 12px; height: 12px; margin-bottom: -2px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"><path d="M12   0  L4  10  L20  10Z"/><path d="M12  24  L4  14  L20  14Z"/></svg>`}
		iconAsc={`<svg style="width: 12px; height: 12px; margin-bottom: -2px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"><path d="M12   0  L4  10  L20  10Z"/></svg>`}
		iconDesc={`<svg style="width: 12px; height: 12px; margin-bottom: -2px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"><path d="M12  24  L4  14  L20  14Z"/></svg>`}
	>
		<Row slot="row" let:row let:n {row} />
	</SvelteTable>
</div>

<style>
	#table {
		transition: all 0.4s;
		overflow-y: auto;
	}

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
		user-select: none;
		position: sticky;
		background-color: var(--bg-color);
		top: 0;
	}

	#table :global(tbody td:not(:first-of-type)) {
		padding: 8px 0;
		min-height: 32px;
	}

	@media (min-width: 1000px) {
		#table {
			width: 1000px;
			margin: auto;
		}
	}

	#table :global(h1) {
		margin: 12px 0 12px 24px;
	}
</style>
