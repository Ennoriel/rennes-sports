<script lang='ts'>
	import type { Sport } from '../../types/sport.type';

	export let row: Sport;

	$: svg = row && (row.sex === 'Mixte' ? 'mixte' : row.sex === 'Masculin' ? 'male' : 'female')
</script>

{#if row.birthYear.length === 0}
	<div>
		{row.otherYear}
	</div>
{:else if row.birthYear.length === 1}
	<div>
		{row.birthYear[0]}
	</div>
{:else}
	<div>
		{#if row.adult}
			Adultes (&le; 2003)
		{:else}
			{row.birthYear[0]}
		{/if}
		 à {row.birthYear[row.birthYear.length - 1]}
	</div>
{/if}

<div class='flex'>
	<img alt="{row.sex}" src="svg/gender-{svg}.svg" />
	{row.sex}
</div>

<style>
    div {
        text-align: center;
    }
		.flex {
        display: flex;
        justify-content: center;
        gap: .2em;
		}
</style>
