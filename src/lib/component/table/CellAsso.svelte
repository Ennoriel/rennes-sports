<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import Link from "$lib/component/Link.svelte";

	export let row: Sport;
</script>

<span>
	{row.assoName}
</span>
<Link target="_blank" href={row.website} alt="lien" imgSrc="/svg/right-up.svg" >
	consulter le site
</Link>

<style>
	span {
		display: block;
		text-align: center;
		line-height: 17px;
		font-weight: 700;
	}
</style>
