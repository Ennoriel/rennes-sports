<script lang='ts'>
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

{#each row.slots as slot}
	<div class='slot'>
		{slot.location}
	</div>
{/each}

<style>
	div {
			text-align: center;
	}
</style>