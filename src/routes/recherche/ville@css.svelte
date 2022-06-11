<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import Autocomplete from '$lib/component/input/Autocomplete.svelte';
	import { uniqCities } from '$lib/data/cities';

	let cityId: string | undefined = undefined;

	let focus = false;
	let listOpen = false;
	let delay = false;
	let delay2 = true;

	$: if (focus) {
		listOpen = listOpen && delay;
		setTimeout(() => {
			delay = true;
			listOpen = true;
			setTimeout(() => {
				delay2 = false;
			}, 0);
		}, 400);
	}

	$: if (cityId) {
		const route = $page.url.searchParams.get('route');
		goto(`/recherche/${route}?q=_${cityId}`);
	}
</script>

<main>
	{#if !cityId}
		<div transition:fade style:padding-bottom={focus ? '200px' : '0'} class:delay2>
			<Autocomplete
				label="Où souhaitez-vous exercer votre activité sportive?"
				placeholder="Rennes"
				name="birthYear"
				options={uniqCities}
				labelIdentifier="name"
				optionIdentifier="id"
				getOptionLabel={(option) => option.name}
				bind:value={cityId}
				nbItemDisplayed={7}
				on:focus={() => (focus = true)}
				on:blur={() => {
					focus = false;
					delay = false;
					delay2 = true;
				}}
				bind:listOpen
			/>
		</div>
	{/if}
</main>

<style>
	main,
	div {
		height: 100vh;
		width: 100vw;
		background-color: var(--main-color);
	}
	div :global(input:focus-visible) {
		outline-offset: 2px;
		outline: 2px solid white !important;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;

		transition: all 0.5s;

		position: relative;
		max-width: 400px;
		margin: auto;
	}

	div :global(label) {
		color: white;
	}

	div :global(.autocomplete .list) {
		padding-right: 8px;
	}

	.delay2 :global(.autocomplete .list) {
		min-height: 0;
		max-height: 0;
	}
</style>
