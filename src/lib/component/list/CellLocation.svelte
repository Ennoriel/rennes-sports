<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import Link from '$lib/component/atom/Link.svelte';
	import Pin from '../svg/Pin.svelte';

	export let row: Sport;

	$: slots =
		row.slots.length > 1 && row.slots.every((s) => s.location._id === row.slots[0].location._id)
			? [row.slots[0]]
			: row.slots;
</script>

{#each slots as slot}
	<div>
		<Link href="/recherche/carte?locationId={slot.location._id}" svg={Pin}>
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
