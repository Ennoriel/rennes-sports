<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

<span>
	{row.sport}
</span>

<style>
	span {
		font-weight: 900;
		font-size: 15px;
	}
</style>
