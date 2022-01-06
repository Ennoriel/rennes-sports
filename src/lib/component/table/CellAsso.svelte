<script lang="ts">
	import { getHost } from '$lib/utils/static.util';
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

<span>
	{row.assoName}
</span>
<a target="_blank" href={row.website}>
	<img alt="lien" src="{getHost()}/svg/right-up.svg" />
	consulter le site
</a>

<style>
	span,
	a {
		display: block;
		text-align: center;
		line-height: 17px;
	}
	span {
		font-weight: 700;
	}
	a {
		color: black;
		text-decoration: none;
		outline: none;
	}
	a:hover,
	a:focus {
		color: pink;
	}
</style>
