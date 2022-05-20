<script lang="ts">
	import type { GroupSport, Location } from '$lib/types/location.type';
	import { displayHours, displayYear } from '$lib/utils/time';
	import Link from '$lib/component/atom/Link.svelte';

	export let location: Location;
	export let sports: Array<GroupSport>;
</script>

<h2>
	{location.name}
</h2>
<div class="wrapper">
	{#each sports as sport, index}
		{#if index}
			<hr />
		{/if}
		<div>
			<h3>
				{sport.sportName}
			</h3>
			{#each sport.sports as s}
				<div class="sport">
					{s.level}, {displayYear(s.birthYear, s.otherYear, s.adult)}, {s.sex}
				</div>
				{#each s.slots as slot}
					<div class="slots">
						▶ {slot.day}
						{displayHours(slot.hour)}
						{#if slot.location._id !== location._id}
							({slot.location.name})
						{/if}
					</div>
				{/each}
				<div>
					<Link href={s.association.website} target="_blank" img={{ src: '/svg/right-up.svg' }}
						>{s.association.name}</Link
					>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	:global(.leaflet-popup-content-wrapper) {
		padding: 0;
		border-radius: 20px;
		font-family: 'Roboto', sans-serif;
	}

	:global(.leaflet-popup-content) {
		margin: 0;
		padding-bottom: 1px;
	}

	:global(.leaflet-popup a.leaflet-popup-close-button) {
		color: white;
		transition: color 0.2s;
		padding: 4px;
		width: 32px;
		height: 32px;
	}
	:global(.leaflet-popup a.leaflet-popup-close-button:hover) {
		color: var(--secondary-color);
	}

	.wrapper {
		width: 268px;
		max-height: 200px;
		overflow-y: auto;
		margin: 0 0 16px 16px;
		padding: 16px 16px 0 0;
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

	.sport {
		margin-top: 8px;
	}

	hr {
		margin: 16px;
		border: 1px solid #eaeaea;
	}

	.slots {
		font-weight: bold;
	}

	:global(.leaflet-container a) {
		text-align: left;
		color: var(--text-color);
	}
</style>
