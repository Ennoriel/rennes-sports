<script lang="ts">
	import { Sport } from '../types/sport.type';
	import type { Location } from '$lib/types/location.type';
	import { displayHours, displayYear } from '$lib/utils/time';
	import { locations } from '$lib/data/locations';

	export let location: Location;
	export let sports: Array<Sport>;
</script>

<h2>
	{location.name}
</h2>
<div class="wrapper">
	{#each sports as sport}
		<h3>
			{sport.sport}
		</h3>
		<div>
			{sport.level}, {displayYear(sport.birthYear, sport.otherYear, sport.adult)}, {sport.sex}
		</div>
		{#each sport.slots as slot}
			<div class="slots">
				{slot.day}
				{displayHours(slot.hour)}
				{#if slot.locationId !== location.id}
					({locations.find((l) => l.id === slot.locationId).name})
				{/if}
			</div>
		{/each}
		<div>
			{sport.assoName}
		</div>
	{/each}
</div>

<style>
	:global(.leaflet-popup-content-wrapper) {
		padding: 0;
		border-radius: 20px;
	}

	:global(.leaflet-popup-content) {
		margin: 0;
		padding-bottom: 1px;
	}

	:global(.leaflet-popup a.leaflet-popup-close-button) {
		padding: 8px;
	}

	.wrapper {
		/*overflow: hidden;*/
		width: 268px;
		max-height: 200px;
		overflow-y: auto;
		margin: 16px 0 16px 16px;
		padding: 0 16px 0 0;
	}

	h2 {
		background-color: var(--main-color);
		color: white;
		height: 32px;
		font-size: 15px;
		line-height: 32px;
		text-align: center;
		border-radius: 20px 20px 0 0;
		margin: 0;
	}

	h3 {
		color: var(--main-color);
		font-size: 14px;
		font-weight: 700;
		margin: 0;
	}

	h3:not(:first-of-type) {
		margin-top: 8px;
	}

	h3::before {
		content: '•';
		margin-right: 5px;
	}

	.slots {
		font-weight: bold;
	}
</style>
