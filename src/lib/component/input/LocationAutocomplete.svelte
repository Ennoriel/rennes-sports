<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';
	import type { Location } from '$lib/types/location.type';

	export let label = 'Lieu';
	export let name = 'location';
	export let required = false;
	export let placeholder = 'Ex : Parc de la Poterie';
	export let value: Location | undefined = undefined;
	export let filterText: string | undefined = undefined;
	export let listPlacement: 'auto' | 'top' | 'bottom' = 'bottom';
	export let variant: 'square' | 'rounded' = 'rounded';

	let isWaiting = false;

	async function getLocations(filterText = ''): Promise<Location[]> {
		return new Promise((resolve) =>
			fetch(`/api/locations.json?filter=${encodeURIComponent(filterText)}`)
				.then((res) => res.json())
				.then((res: Array<Location>) => res.map((l) => ({ ...l, label: l.name })))
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
	bind:value
	bind:filterText
	loadOptions={getLocations}
/>
