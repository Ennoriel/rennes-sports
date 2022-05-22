<script lang="ts">
	import { state } from '$lib/store/state';
	import { range } from '$lib/utils/array';
	import { LEVELS } from '$lib/data/sport';
	import Panel from './Panel.svelte';
	import Radio from '$lib/component/input/Radio.svelte';
	import Checkbox from '$lib/component/input/Checkbox.svelte';
	import Range from '$lib/component/input/Range.svelte';
	import Title from '$lib/component/atom/Title.svelte';
	import Button from '$lib/component/atom/Button.svelte';
	import ButtonGroup from '$lib/component/layout/ButtonGroup.svelte';
	import X from '$lib/component/svg/X.svelte';
	import LocationAutocomplete from '$lib/component/input/LocationAutocomplete.svelte';
	import SportAutocomplete from '$lib/component/input/SportAutocomplete.svelte';
	import Autocomplete from '../input/Autocomplete.svelte';
	import AssociationAutocomplete from '../input/AssociationAutocomplete.svelte';
	import type { AutocompleteSetValue } from '$lib/types/input.type';

	export let pageRef: HTMLElement;

	let setSport: AutocompleteSetValue;
	let setBirthYear: AutocompleteSetValue;
	let setLocation: AutocompleteSetValue;
	let setAssociation: AutocompleteSetValue;
</script>

<Panel {pageRef}>
	<div class="panel-wrapper">
		<ButtonGroup>
			<Title>Filtres</Title>
			<Button
				theme="secondary"
				variant="rounded"
				size="s"
				on:click={() => {
					$state.filter = { day: [], minutes: [360, 1410] };
					setSport();
					setBirthYear();
					setLocation();
					setAssociation();
				}}
				aria-label="Réinitialiser les filtres"
			>
				Réinitialiser
			</Button>
			<Button
				theme="transparent"
				variant="rounded"
				size="s"
				on:click={() => ($state.isOpen = false)}
				icon={X}
				aria-label="Fermer les filtres"
			/>
		</ButtonGroup>

		<SportAutocomplete bind:value={$state.filter.sport} variant="square" bind:setValue={setSport} />

		<Radio label="Pratique" name="level" options={LEVELS} bind:value={$state.filter.level} />

		<Autocomplete
			label="Année de naissance"
			placeholder="Année"
			name="birthYear"
			options={range(2021, 1920)}
			bind:value={$state.filter.birthYear}
			variant="square"
			bind:setValue={setBirthYear}
		/>

		<Checkbox
			label="Sexe"
			name="sex"
			options={['Mixte', 'Féminin', 'Masculin']}
			bind:value={$state.filter.sex}
		/>

		<Checkbox
			label="Jour"
			name="slotDay"
			options={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
			bind:value={$state.filter.day}
		/>

		<Range
			label="Horaire"
			labelInHour={true}
			name="slotMinutes"
			min={360}
			max={1410}
			step={15}
			bind:range={$state.filter.minutes}
		/>

		<LocationAutocomplete
			bind:value={$state.filter.location}
			listPlacement="top"
			variant="square"
			bind:setValue={setLocation}
		/>

		<AssociationAutocomplete
			bind:value={$state.filter.associationId}
			listPlacement="top"
			variant="square"
			bind:setValue={setAssociation}
		/>

		<Button theme="vibrant" variant="rounded" size="s" on:click={() => ($state.isOpen = false)}>
			Valdier
		</Button>
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
