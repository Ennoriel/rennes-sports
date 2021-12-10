<script lang='ts'>
	import { sports } from '$lib/data/sports';
	import SvelteTable from 'svelte-table';
	import Row from '$lib/component/table/Row.svelte';
	import FilterPanel from '$lib/component/FilterPanel.svelte';
	import { Filter } from '$lib/types/sport.type';
	import { state } from '$lib/store/state';
	import { hourRangeOverlaps } from '../lib/utils/time';

	let rows = sports;

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
			value: v => v.assoName,
			sortable: true
		}
	];

	function onSubmit(filter: Filter) {
		rows = sports.filter(sport => !filter.sport || sport.sport === filter.sport)
			.filter(sport => !filter.level || sport.level === filter.level)
			.filter(sport => !filter.birthYear || sport.birthYear.includes(filter.birthYear) || (sport.adult && filter.birthYear <= 2003))
			.filter(sport => !filter.sex || sport.sex === filter.sex || (["Féminin", "Masculin"].includes(filter.sex) && sport.sex === "Mixte"))
			.filter(sport => !filter.day || !filter.day.length || sport.slots.some(slot => filter.day.includes(slot.day)))
			.filter(sport => !filter.minutes || sport.slots.some(slot => hourRangeOverlaps(slot.hour, filter.minutes)))
			.filter(sport => !filter.location || sport.slots.some(slot => slot.location === filter.location))
			.filter(sport => !filter.assoName || sport.assoName === filter.assoName)
	}
</script>

<FilterPanel {onSubmit} />

<div id='table' class:isPadded={$state.isOpen}>
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

    #table :global(thead tr) {
        font-size: 10px;
        text-transform: uppercase;
        color: #7F7F7F;
        box-shadow: 0 0 5px #888;

        position: sticky;
        background-color: #FAFAFA;
        height: 40px;
        top: 0;
    }

    #table :global(tbody td:not(:first-of-type)) {
        padding: 4px 0;
        min-height: 32px;
    }

    #table {
        transition: all .4s;
    }
    #table.isPadded {
        padding-left: 300px;
    }

    @media (min-width: 1024px) {
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
</style>