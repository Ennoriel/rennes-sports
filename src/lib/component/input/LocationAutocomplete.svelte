<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';
	import type { Location } from '$lib/types/location.type';

	export let label = 'Lieu';
	export let name = 'name';
	export let required = false;
	export let placeholder = 'Ex : Parc de la Poterie';
	export let value: Location | undefined = undefined;

	let isWaiting = false;

	async function getLocations(filterText = ''): Promise<Location[]> {
		return new Promise((resolve) =>
			fetch(`/api/locations.json?filter=${encodeURIComponent(filterText)}`)
				.then((res) => res.json())
				.then((res: Array<Location>) => res.map((l) => ({ ...l, label: l.name })))
				.then((locations) => resolve(locations))
		);
	}
</script>

<Autocomplete
	{label}
	{name}
	{required}
	{placeholder}
	bind:isWaiting
	noOptionsMessage={isWaiting
		? 'Chargement des lieux...'
		: 'Aucun lieu trouvé. Vous pouvez le créer ;)'}
	labelIdentifier="name"
	bind:value
	loadOptions={getLocations}
/>
