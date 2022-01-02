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
	import ButtonGroup from "$lib/component/ButtonGroup.svelte";
	import Button from "$lib/component/Button.svelte";
	import Title from "$lib/component/Title.svelte";

	export let onSubmit;
	export let pageRef;

	let filter: Filter = JSON.parse(JSON.stringify($state.filter));

	function resetFilters() {
		filter = {
			day: [],
			minutes: [360, 1410]
		};
		onSubmit(filter);
	}
</script>

<Panel {pageRef}>
	<div class="panel-wrapper">
		<Title>Filtres</Title>

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

		<Radio
				label="Sexe"
				options={['Mixte', 'Féminin', 'Masculin']}
				bind:value={filter.sex}
		/>

		<Checkbox
			label="Jour"
			options={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
			bind:value={filter.day}
		/>

		<Range
			label="Horaire"
			labelInHour={true}
			min={360}
			max={1410}
			step={15}
			bind:range={filter.minutes}
		/>

		<Select
			label="Lieu"
			placeholder="Salle / Gymnase"
			options={locations.map((o) => ({ label: o.name, value: o.id }))}
			bind:value={filter.locationId}
		/>

		<Select
			label="Association"
			options={[...new Set(sports.map((sport) => sport.assoName))]}
			bind:value={filter.assoName}
		/>

		<ButtonGroup>
			<Button
				type="submit"
				on:click={() => {
					$state.isOpen = false;
					onSubmit(filter);
				}}
			>
				Valider
			</Button>
			<Button
				type="reset"
				variant="secondary"
				on:click={resetFilters}
			>
				Effacer
			</Button>
		</ButtonGroup>
	</div>
</Panel>

<style>
	.panel-wrapper {
		margin: 1em;
	}
	.panel-wrapper > :global(label:first-child) {
		margin: 0;
	}
</style>
