<script lang="ts">
	import Panel from './Panel.svelte';
	import { range } from '../utils/array';
	import { sports } from '../data/sports';
	import { locations } from '../data/locations';
	import Select from './input/Select.svelte';
	import Radio from './input/Radio.svelte';
	import { state } from '../store/state';
	import Checkbox from './input/Checkbox.svelte';
	import Range from './input/Range.svelte';
	import Title from '$lib/component/Title.svelte';

	export let pageRef;
</script>

<Panel {pageRef}>
	<div class="panel-wrapper">
		<Title>Filtres</Title>

		<Select
			label="Sport"
			options={[...new Set(sports.map((sport) => sport.sport))]}
			bind:value={$state.filter.sport}
		/>

		<Radio
			label="Pratique"
			options={[...new Set(sports.map((sport) => sport.level))]}
			bind:value={$state.filter.level}
		/>

		<Select
			label="Année de naissance"
			placeholder="Année"
			options={range(2021, 1920)}
			bind:value={$state.filter.birthYear}
		/>

		<Radio label="Sexe" options={['Mixte', 'Féminin', 'Masculin']} bind:value={$state.filter.sex} />

		<Checkbox
			label="Jour"
			options={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
			bind:value={$state.filter.day}
		/>

		<Range
			label="Horaire"
			labelInHour={true}
			min={360}
			max={1410}
			step={15}
			bind:range={$state.filter.minutes}
		/>

		<Select
			label="Lieu"
			placeholder="Salle / Gymnase"
			options={locations.map((o) => ({ label: o.name, value: o.id }))}
			bind:value={$state.filter.locationId}
		/>

		<Select
			label="Association"
			options={[...new Set(sports.map((sport) => sport.assoName))]}
			bind:value={$state.filter.assoName}
		/>
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
