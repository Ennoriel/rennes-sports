<script lang="ts">
	import { session } from '$app/stores';
	import type { Sport } from '../../types/sport.type';
	import CellYearSex from './CellYearSex.svelte';
	import CellSlot from './CellSlot.svelte';
	import CellLocation from './CellLocation.svelte';
	import CellSport from './CellSport.svelte';
	import CellAsso from './CellAsso.svelte';
	import CellLevel from './CellLevel.svelte';
	import Button from '../atom/Button.svelte';
	import Trash from '../svg/Trash.svelte';

	export let row: Sport;

	async function del() {
		fetch(`/api/sports/${row._id}`, { method: 'DELETE' }).then(() => {
			window.location.reload();
		});
	}
</script>

<tr>
	<td><CellSport {row} /></td>
	<td><CellLevel {row} /></td>
	<td><CellYearSex {row} /></td>
	<td><CellSlot {row} /></td>
	<td><CellLocation {row} /></td>
	<td><CellAsso {row} /></td>
	{#if $session.association.role === 'admin'}
		<td style:text-align="center">
			<Button type="submit" theme="transparent" icon={Trash} size="s" on:click={del} />
		</td>
	{/if}
</tr>

<style>
	tr {
		background-color: white;
		box-shadow: 0 0 4px #eee;
		transition: all 0.4s ease-in-out;
	}
	td:first-of-type {
		padding-left: 16px;
	}
</style>
