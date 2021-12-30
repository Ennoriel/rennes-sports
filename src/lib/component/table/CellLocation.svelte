<script lang="ts">
	import { getHost } from '$lib/utils/static.util';
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

{#each row.slots as slot}
	<div>
		<img alt="localisation" src="{getHost()}/svg/location.svg" />
		{slot.location}
	</div>
{/each}

<style>
	div {
		display: flex;
		justify-content: center;
		gap: 0.2em;
		text-align: center;
		line-height: 3em;
	}
</style>
