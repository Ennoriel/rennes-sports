<script lang='ts'>
	import type { Sport } from '../../types/sport.type';
	import { displayHours } from '../../utils/time';

	export let row: Sport;
</script>

{#each row.slots as slot}
	<div class='slot'>
		<div class='slot-day'>{slot.day}</div>
		<div class='slot-hour'> {displayHours(slot.hour)}</div>
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