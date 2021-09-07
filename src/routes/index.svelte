<script lang='ts'>
	import { sports } from '../lib/data/sports';
	import SvelteTable from 'svelte-table';
	import Row from '$lib/component/Row.svelte';

	const rows = sports;

	const columns = [
		{
			key: 'sport',
			title: 'sport',
			value: v => v.sport,
			sortable: true
		},
		{
			key: 'level',
			title: 'pratique',
			value: v => v.level,
			sortable: true
		},
		{
			key: 'year-sexe',
			title: 'année de naissance - sexe',
			sortable: true
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
			value: v => v.assoName,
			sortable: true
		}
	];
</script>

<div id='table'>
	<SvelteTable columns='{columns}' rows='{rows}'>
		<Row slot='row' let:row let:n {row}/>
	</SvelteTable>
</div>

<style>
    #table :global(table) {
				width: calc(100% - 48px);
        border-collapse: separate;
				border-spacing: 0 8px;
				margin: 0 24px;
    }

    #table :global(thead) {
        font-variant: small-caps;
        color: #999;
    }

    #table :global(tbody td:not(:first-of-type)) {
        padding: 4px 0;
        min-height: 32px;
    }
</style>