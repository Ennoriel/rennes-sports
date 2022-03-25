<script lang="ts">
	import Panel from './Panel.svelte';
	import { range } from '$lib/utils/array';
	import { assos } from '$lib/data/assos';
	import { locations } from '$lib/data/locations';
	import Select from '../input/Select.svelte';
	import Radio from '../input/Radio.svelte';
	import { state } from '$lib/store/state';
	import Checkbox from '../input/Checkbox.svelte';
	import Range from '../input/Range.svelte';
	import Title from '$lib/component/atom/Title.svelte';
	import Button from '$lib/component/atom/Button.svelte';
	import ButtonGroup from '$lib/component/layout/ButtonGroup.svelte';
	import X from '$lib/component/svg/X.svelte';

	export let pageRef;

	$: availableAssos = assos
		.filter((asso) => $state.allSports.some((sport) => sport.assoId === asso.id))
		.map((asso) => ({ label: asso.name, value: asso.id }));
</script>

<Panel {pageRef}>
	<div class="panel-wrapper">
		<ButtonGroup>
			<Title>Filtres</Title>
			<Button
				variant="secondary"
				on:click={() => ($state.filter = { day: [], minutes: [360, 1410] })}>Réinitialiser</Button
			>
			<Button variant="secondary" shape="circle" on:click={() => ($state.isOpen = false)}>
				<X />
			</Button>
		</ButtonGroup>

		<Select
			label="Sport"
			options={[...new Set($state.allSports.map((sport) => sport.sport))]}
			bind:value={$state.filter.sport}
		/>

		<Radio
			label="Pratique"
			options={[...new Set($state.allSports.map((sport) => sport.level))]}
			bind:value={$state.filter.level}
		/>

		<Select
			label="Année de naissance"
			placeholder="Année"
			options={range(2021, 1920)}
			bind:value={$state.filter.birthYear}
		/>

		<Checkbox label="Sexe" options={['Mixte', 'Féminin', 'Masculin']} bind:value={$state.filter.sex} />

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

		<Select label="Association" options={availableAssos} bind:value={$state.filter.assoId} />
	</div>
</Panel>

<style>
	.panel-wrapper {
		margin: 1em;
	}
	.panel-wrapper > :global(label:first-child) {
		margin: 0;
	}
	.panel-wrapper :global(h1) {
		margin: 0;
		line-height: 33px;
		flex-grow: 1;
	}
	.panel-wrapper :global(button) {
		flex-grow: 0;
	}
</style>
