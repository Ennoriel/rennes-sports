<script lang='ts'>
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

<span class='asso-name'>
	{row.assoName}
</span>
<a class='asso-website' href='{row.website}'>
	consulter le site
</a>

<style>
    span, a {
        display: block;
        text-align: center;
    }

    .asso-name {
    }

    .asso-website {
    }
</style>
