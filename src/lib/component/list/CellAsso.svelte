<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import Link from '$lib/component/atom/Link.svelte';
	import LinkIcon from '../svg/LinkIcon.svelte';

	export let row: Sport;
</script>

<span class="asso-name">
	{row.association.name}
</span>
<Link target="_blank" href={row.association.website} svg={LinkIcon}>
	<span class="link"> consulter le site </span>
</Link>

<style>
	.asso-name {
		display: block;
		text-align: center;
		line-height: 17px;
		font-weight: 700;
	}
	.link {
		font-size: 12px;
	}
</style>
