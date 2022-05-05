<script lang="ts">
	import type { GroupSport, Location } from '$lib/types/location.type';
	import { displayHours, displayYear } from '$lib/utils/time';
	import { assos } from '$lib/data/assos';

	export let location: Location;
	export let sports: Array<GroupSport>;
</script>

<h2>
	{location.name}
</h2>
<div class="wrapper">
	{#each sports as sport}
		<h3>
			{sport.sportName}
		</h3>
		{#each sport.sports as s}
			<div class="sport">
				- {s.level}, {displayYear(s.birthYear, s.otherYear, s.adult)}, {s.sex}
			</div>
			{#each s.slots as slot}
				<div class="slots">
					{slot.day}
					{displayHours(slot.hour)}
					{#if slot.location._id !== location._id}
						({slot.location.name})
					{/if}
				</div>
			{/each}
			<div>
				{assos.find((asso) => asso.id === s.assoId)?.name}
			</div>
		{/each}
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
		padding: 8px 24px;
	}

	.wrapper {
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

	.sport {
		margin-top: 6px;
	}

	.slots {
		font-weight: bold;
	}
</style>
