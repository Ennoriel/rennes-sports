<script lang='ts'>
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

<div className='asso-from-year'>
	{row.fromYear.join(', ')}
</div>
<div className='asso-sexe'>
	{row.sexe}
</div>

<style>
    div {
        text-align: center;
    }

    .asso-from-year {
    }

    .asso-sexe {
    }
</style>
