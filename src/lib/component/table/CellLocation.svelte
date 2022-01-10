<script lang="ts">
	import { getHost } from '$lib/utils/static.util';
	import type { Sport } from '$lib/types/sport.type';
	import { locations } from '$lib/data/locations';
	import Link from '$lib/component/Link.svelte';

	export let row: Sport;
</script>

{#each row.slots as slot}
	<div>
		<Link
			alt="localisation"
			imgSrc="/svg/location.svg"
			href="{getHost()}/recherche/carte/{slot.locationId}"
		>
			{locations.find((location) => location.id === slot.locationId)?.name}
		</Link>
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
