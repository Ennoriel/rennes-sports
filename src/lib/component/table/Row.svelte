<script>
	import CellYearSex from './CellYearSex.svelte';
	import CellSlot from './CellSlot.svelte';
	import CellLocation from './CellLocation.svelte';
	import CellSport from './CellSport.svelte';
	import CellAsso from './CellAsso.svelte';
	import CellLevel from './CellLevel.svelte';

	export let row;

	const colors = {
		['Basket-ball']: '#bf9c03',
		['Roller randonnée']: '#5f3877',
		['Roller hockey']: '#33332b',
		['Roller slalom']: '#d0a9d1',
		['Roller fitness']: '#20441f',
		['Rink Hockey']: '#e15fef',
		['Roller skatepark']: '#d6ad3b',
		['Roller']: '#c5f45f'
	};
</script>

<tr>
	<td style="border-color: {colors[row.sport]}"><CellSport {row} /></td>
	<td><CellLevel {row} /></td>
	<td><CellYearSex {row} /></td>
	<td><CellSlot {row} /></td>
	<td><CellLocation {row} /></td>
	<td><CellAsso {row} /></td>
</tr>

<style>
	tr {
		background-color: white;
		box-shadow: 0 0 3px #ccc;
		cursor: pointer;
		transition: all 0.4s ease-in-out;
	}
	tr:hover {
		box-shadow: 0 0 5px #888;
	}
	td:first-of-type {
		border-left: 5px solid black;
		padding-left: 8px;
	}
</style>
