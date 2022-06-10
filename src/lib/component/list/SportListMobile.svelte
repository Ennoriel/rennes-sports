<script lang="ts">
	import type { Sport } from '$lib/types/sport.type';
	import { displayHours, displayYear } from '$lib/utils/time';
	import Link from '$lib/component/atom/Link.svelte';
	import Title from '../atom/Title.svelte';
	import Pin from '../svg/Pin.svelte';
	import LinkIcon from '../svg/LinkIcon.svelte';

	export let sports: Array<Sport>;
</script>

<div class="wrapper">
	<Title>
		Résultats ({sports.length})
	</Title>

	{#each sports as sport}
		{@const slotSameLocation = sport.slots.every(
			(s) => s.location._id === sport.slots[0].location._id
		)}
		<div class="card">
			<h2>
				<strong>{sport.sport}</strong>
				<span
					>{sport.level}, {displayYear(sport.birthYear, sport.otherYear, sport.adult)}, {sport.sex}</span
				>
			</h2>
			{#each sport.slots as slot, index}
				<div class="slots">
					<span>
						{slot.day}
						{displayHours(slot.hour)}
					</span>
					{#if index === sport.slots.length - 1 || !slotSameLocation}
						<Link href="/recherche/carte?locationId={slot.location._id}" svg={Pin}>
							{slot.location.name}
						</Link>
					{/if}
				</div>
			{/each}
			<div class="asso-name">
				{sport.association.name}
				<Link target="_blank" href={sport.association.website} svg={LinkIcon}>
					consulter le site
				</Link>
			</div>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		margin: calc(var(--header-height) + 20px) 0 16px 16px;
		padding: 0 16px 0 0;
	}

	.wrapper :global(h1) {
		margin-bottom: 8px;
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
		line-height: 16px;
		border-radius: 8px 8px 0 0;
		padding: 8px 16px;
	}

	h2 strong {
		font-size: 15px;
		font-weight: 900;
		margin-right: 16px;
	}

	h2 strong,
	h2 span {
		display: inline-block;
		vertical-align: middle;
	}

	.slots:first-of-type {
		margin-top: 8px;
	}
	.slots {
		margin: 0 16px;
		font-weight: bold;
	}

	.slots :global(a) {
		justify-content: center;
		font-weight: 300;
		width: fit-content;
		margin-bottom: 8px;
	}

	.asso-name {
		margin: 8px 16px 0;
		padding-top: 8px;
		border-top: 1px solid #c4c4c4;
		font-weight: 700;
		display: flex;
		gap: 16px;
	}

	.asso-name :global(a) {
		font-weight: 300;
	}
</style>
