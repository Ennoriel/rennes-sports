<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import { displayYear } from '$lib/utils/time';

	export let row: Sport;

	$: svg = row && (row.sex === 'Mixte' ? 'mixte' : row.sex === 'Masculin' ? 'male' : 'female');
</script>

<div>
	{displayYear(row.birthYear, row.otherYear, row.adult)}
</div>

<div class="flex">
	<img alt={row.sex} src="/svg/gender-{svg}.svg" />
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
