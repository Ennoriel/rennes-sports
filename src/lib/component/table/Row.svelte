<script>
	import CellYearSex from './CellYearSex.svelte';
	import CellSlot from './CellSlot.svelte';
	import CellLocation from './CellLocation.svelte';
	import CellSport from './CellSport.svelte';
	import CellAsso from './CellAsso.svelte';
	import CellLevel from './CellLevel.svelte';

	export let row;
</script>

<tr>
	<td><CellSport {row} /></td>
	<td><CellLevel {row} /></td>
	<td><CellYearSex {row} /></td>
	<td><CellSlot {row} /></td>
	<td><CellLocation {row} /></td>
	<td><CellAsso {row} /></td>
</tr>

<style>
	tr {
		background-color: white;
		transition: all 0.4s ease-in-out;
	}
	td:first-of-type {
		padding-left: 16px;
	}
</style>
