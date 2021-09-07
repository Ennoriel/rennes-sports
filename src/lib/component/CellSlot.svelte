<script lang='ts'>
	import type { Sport } from '$lib/types/sport.type';

	export let row: Sport;
</script>

{#each row.slots as slot}
	<div class='slot'>
		<div class='slot-day'>{slot.day}</div>
		<div class='slot-hour'>{slot.hour}</div>
	</div>
{/each}

<style>
    .slot {

		}
    .slot-day, .slot-hour {
				text-align: center;
		}
    .slot-day {
				font-weight: bolder;
		}
    .slot-hour {

		}
</style>