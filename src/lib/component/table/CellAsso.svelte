<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import Link from '$lib/component/Link.svelte';
	import { assos } from '$lib/data/assos';

	export let row: Sport;

	$: asso = assos.find((asso) => asso.id === row.assoId);
</script>

<span>
	{asso.name}
</span>
<Link target="_blank" href={asso.website} alt="lien" imgSrc="/svg/right-up.svg">
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
