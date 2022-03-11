<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import { displayHours, displayYear } from '$lib/utils/time';
	import { locations } from '$lib/data/locations';
	import Link from '$lib/component/atom/Link.svelte';
	import { assos } from '$lib/data/assos';

	export let sports: Array<Sport>;
</script>

<div class="wrapper">
	{#each sports as sport}
		{@const asso = assos.find((a) => a.id === sport.assoId)}
		<div class="card">
			<h2>
				<strong>{sport.sport}</strong>
				{sport.level}, {displayYear(sport.birthYear, sport.otherYear, sport.adult)}, {sport.sex}
			</h2>
			{#each sport.slots as slot}
				<div class="slots">
					<span>
						{slot.day}
						{displayHours(slot.hour)}
					</span>
					<Link
						alt="localisation"
						imgSrc="/svg/location.svg"
						href="recherche/carte/location/{slot.locationId}"
					>
						{locations.find((location) => location.id === slot.locationId)?.name}
					</Link>
				</div>
			{/each}
			<div class="asso-name">
				{asso.name}
				<Link target="_blank" href={asso.website} alt="lien" imgSrc="/svg/right-up.svg">
					consulter le site
				</Link>
			</div>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		margin: 16px 0 16px 16px;
		padding: 0 16px 0 0;
	}

	.card {
		background-color: white;
		border-radius: 8px;
		padding-bottom: 8px;
		margin-bottom: 16px;
	}

	h2 {
		background-color: var(--main-color);
		color: white;
		font-size: 13px;
		font-weight: 300;
		line-height: 32px;
		border-radius: 8px 8px 0 0;
		padding: 0 16px;
	}

	h2 strong {
		font-size: 15px;
		font-weight: 900;
		margin-right: 16px;
	}

	.slots {
		margin: 8px 16px;
		font-weight: bold;
	}

	.slots :global(a) {
		text-align: left;
		font-weight: 300;
		width: fit-content;
	}

	.asso-name {
		margin: 8px 16px 0;
		padding-top: 8px;
		border-top: 1px solid #c4c4c4;
		font-weight: 700;
	}

	.asso-name :global(a) {
		display: inline;
		font-weight: 300;
		margin-left: 16px;
	}
</style>
