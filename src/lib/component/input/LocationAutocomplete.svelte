<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';
	import type { Location } from '$lib/types/location.type';
	import type { AutocompleteSetValue } from '$lib/types/input.type';

	export let label = 'Lieu';
	export let name = 'location';
	export let required = false;
	export let placeholder = 'Parc de la Poterie';
	export let value: Location | string | undefined = undefined;
	export let initialValue: Location | undefined = undefined;
	export let filterText: string | undefined = undefined;
	export let listPlacement: 'auto' | 'top' | 'bottom' = 'bottom';
	export let variant: 'square' | 'rounded' = 'rounded';
	export let setValue: AutocompleteSetValue = undefined;
	export let valueAsId = false;

	let isWaiting = false;

	async function getLocations(filterText = ''): Promise<Location[]> {
		return new Promise((resolve) =>
			fetch(`/api/locations.json?filter=${encodeURIComponent(filterText)}`)
				.then((res) => res.json())
				.then((res: Array<Location>) =>
					res.map((l) => ({
						...l,
						label: l.name,
						value: valueAsId ? l._id : undefined
					}))
				)
				.then(resolve)
		);
	}
</script>

<Autocomplete
	{label}
	{name}
	{required}
	{placeholder}
	{variant}
	{listPlacement}
	bind:isWaiting
	noOptionsMessage={isWaiting
		? 'Chargement des lieux...'
		: filterText?.length > 3
		? 'Aucun lieu trouvé !'
		: 'Commencez à taper un lieu'}
	labelIdentifier="name"
	bind:setValue
	bind:value
	bind:filterText
	{initialValue}
	on:change
	loadOptions={getLocations}
/>
