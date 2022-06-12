<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

<div>
	{row.sport}
</div>

<style>
	div {
		font-weight: 900;
		font-size: 15px;
		text-align: center;
	}
</style>
