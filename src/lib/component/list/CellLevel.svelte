<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

<div>
	{row.level.join(', ')}
</div>

<style>
	div {
		text-align: center;
	}
</style>
