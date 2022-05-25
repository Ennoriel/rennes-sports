<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import Link from '$lib/component/atom/Link.svelte';

	export let row: Sport;

	$: slots =
		row.slots.length > 1 && row.slots.every((s) => s.location._id === row.slots[0].location._id)
			? [row.slots[0]]
			: row.slots;
</script>

{#each slots as slot}
	<div>
		<Link img={{ src: '/svg/location.svg' }} href="/recherche/carte/location/{slot.location._id}">
			{slot.location.name}
		</Link>
	</div>
{/each}

<style>
	div {
		display: flex;
		justify-content: center;
		gap: 0.2em;
		text-align: center;
	}

	div :global(a) {
		line-height: 3em;
	}
</style>
