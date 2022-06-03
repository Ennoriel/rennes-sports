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
	import { DAYS } from '$lib/data/days';
	import { fromObj } from 'form-data-to-object';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { Filter } from '$lib/types/sport.type';

	export let pageRef: HTMLElement;
	export let filter: Filter;

	let setSport: AutocompleteSetValue;
	let setBirthYear: AutocompleteSetValue;
	let setLocation: AutocompleteSetValue;
	let setAssociation: AutocompleteSetValue;

	let search: any;

	function updateUrl() {
		setTimeout(() => {
			search = new URLSearchParams();

			const _filter = { ...filter };
			delete _filter.association;
			delete _filter.location;

			console.log(_filter);

			Object.entries(fromObj(_filter || {}))
				.filter(([_, v]) => !!v)
				.forEach(([k, v]) => {
					search.append(k, v);
				});

			const url = new URL(`${$page.url.origin}${$page.url.pathname}/?` + search.toString());

			goto(url.toString());
		}, 0);
	}
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
					filter = { day: [], minutes: [360, 1410] };
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

		<SportAutocomplete
			bind:value={filter.sport}
			variant="square"
			bind:setValue={setSport}
			initialValue={filter.sport}
			on:change={updateUrl}
		/>

		<Radio
			label="Pratique"
			name="level"
			options={LEVELS}
			bind:value={filter.level}
			on:click={updateUrl}
		/>

		<Autocomplete
			label="Année de naissance"
			placeholder="Année"
			name="birthYear"
			options={range(2021, 1920)}
			bind:value={filter.birthYear}
			initialValue={filter.birthYear}
			variant="square"
			bind:setValue={setBirthYear}
			on:change={updateUrl}
		/>

		<Checkbox
			label="Sexe"
			name="sex"
			options={['Mixte', 'Féminin', 'Masculin']}
			bind:value={filter.sex}
			on:click={updateUrl}
		/>

		<Checkbox
			label="Jour"
			name="slotDay"
			options={DAYS}
			bind:value={filter.day}
			on:click={updateUrl}
		/>

		<Range
			label="Horaire"
			labelInHour={true}
			name="slotMinutes"
			min={360}
			max={1410}
			step={30}
			bind:range={filter.minutes}
			on:change={updateUrl}
		/>

		<LocationAutocomplete
			bind:value={filter.locationId}
			listPlacement="top"
			variant="square"
			bind:setValue={setLocation}
			initialValue={filter.location}
			valueAsId
			on:change={updateUrl}
		/>

		<AssociationAutocomplete
			bind:value={filter.associationId}
			listPlacement="top"
			variant="square"
			bind:setValue={setAssociation}
			initialValue={filter.association}
			valueAsId
			on:change={updateUrl}
		/>

		<Button theme="vibrant" variant="rounded" size="s" on:click={() => ($state.isOpen = false)}>
			Valider
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
