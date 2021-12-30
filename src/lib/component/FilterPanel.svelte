<script lang="ts">
	import Panel from './Panel.svelte';
	import { range } from '../utils/array';
	import { sports } from '../data/sports';
	import { locations } from '../data/locations';
	import { Filter } from '../types/sport.type';
	import Select from './input/Select.svelte';
	import Radio from './input/Radio.svelte';
	import { state } from '../store/state';
	import Checkbox from './input/Checkbox.svelte';
	import Range from './input/Range.svelte';

	export let onSubmit;

	let filter: Filter = {};

	const locationIds = locations.map((location) => location.id);

	function resetFilters() {
		filter = {
			day: [],
			minutes: [360, 1380]
		};
		onSubmit(filter);
	}
</script>

<Panel>
	<div class="panel-wrapper">
		<h2>Filtres</h2>

		<Select
			label="Sport"
			options={[...new Set(sports.map((sport) => sport.sport))]}
			bind:value={filter.sport}
		/>

		<Radio
			label="Pratique"
			options={[...new Set(sports.map((sport) => sport.level))]}
			bind:value={filter.level}
		/>

		<Select
			label="Année de naissance"
			placeholder="Année"
			options={range(2021, 1920)}
			bind:value={filter.birthYear}
		/>

		<Radio label="Sexe" options={['Mixte', 'Féminin', 'Masculin']} bind:value={filter.sex} />

		<Checkbox
			label="Jour"
			options={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
			bind:value={filter.day}
		/>

		<Range label="Horaire" min={360} max={1380} step={15} bind:range={filter.minutes} />

		<Select
			label="Lieu"
			placeholder="Salle / Gymnase"
			options={locationIds}
			bind:value={filter.locationId}
		/>

		<Select
			label="Association"
			options={[...new Set(sports.map((sport) => sport.assoName))]}
			bind:value={filter.assoName}
		/>

		<div class="button-wrapper">
			<button
				type="submit"
				on:click={() => {
					$state.isOpen = false;
					onSubmit(filter);
				}}>Valider</button
			>
			<button type="reset" on:click={resetFilters}>Effacer</button>
		</div>
	</div>
</Panel>

<style>
	.panel-wrapper {
		margin: 1em;
	}
	.panel-wrapper > :global(label:first-child) {
		margin: 0;
	}

	h2 {
		text-transform: uppercase;
		font-size: 16px;
		color: var(--main-color);
		font-weight: normal;
	}

	.button-wrapper {
		margin-top: 10px;
		display: flex;
		gap: 10px;
	}
	button {
		flex-grow: 1;
		background-color: #f7f7fa;
		border-radius: 5px;
		padding: 8px 16px;
		cursor: pointer;
		border: none;
		color: #c4c4c4;
	}
	button[type='submit'] {
		flex-grow: 3;
		background-color: var(--main-color);
		color: white;
	}
</style>
