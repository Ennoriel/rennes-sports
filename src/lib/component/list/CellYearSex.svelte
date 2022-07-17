<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import { displayYear } from '$lib/utils/time';
	import GenderAll from '../svg/GenderAll.svelte';
	import GenderMale from '../svg/GenderMale.svelte';
	import GenderFemale from '../svg/GenderFemale.svelte';

	export let row: Sport;

	$: Icon =
		row && (row.sex === 'Mixte' ? GenderAll : row.sex === 'Masculin' ? GenderMale : GenderFemale);
</script>

<div>
	{displayYear(row.birthYear, row.otherYear, row.adult)}
</div>

<div class="flex">
	<svelte:component this={Icon} />
	{row.sex}
</div>

<style>
	div {
		text-align: center;
		line-height: 17px;
	}
	.flex {
		display: flex;
		justify-content: center;
		gap: 0.2em;
	}
</style>
