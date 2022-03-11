<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import { displayHours } from '$lib/utils/time';

	export let row: Sport;
</script>

{#each row.slots as slot}
	<div class="slot">
		<div class="slot-day">{slot.day}</div>
		<div class="slot-hour">{displayHours(slot.hour)}</div>
	</div>
{/each}

<style>
	.slot:not(:last-of-type) {
		margin-bottom: 8px;
	}
	.slot-day,
	.slot-hour {
		text-align: center;
		line-height: 17px;
	}
	.slot-day {
		font-weight: bolder;
	}
	.slot-hour {
	}
</style>
