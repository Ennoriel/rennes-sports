<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';
	import type { Association } from '$lib/types/sport.type';
	import type { AutocompleteSetValue } from '$lib/types/input.type';

	export let label = 'Association';
	export let name = 'association';
	export let required = false;
	export let placeholder = "Association de la Tour d'Argent";
	export let value: Association | string | undefined = undefined;
	export let initialValue: Association | undefined = undefined;
	export let filterText: string | undefined = undefined;
	export let listPlacement: 'auto' | 'top' | 'bottom' = 'bottom';
	export let variant: 'square' | 'rounded' = 'rounded';
	export let setValue: AutocompleteSetValue = undefined;
	export let valueAsId = false;

	let isWaiting = false;

	async function getAssociations(filterText = ''): Promise<{ label?: string; value?: string }[]> {
		return new Promise((resolve) =>
			fetch(`/api/associations?filter=${encodeURIComponent(filterText)}`)
				.then((res) => res.json())
				.then((associations: Array<Partial<Association>>) =>
					associations.map((a) => ({
						...a,
						label: a.name,
						value: valueAsId ? (a._id as string) : undefined
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
		? 'Chargement des associations...'
		: filterText?.length > 3
		? 'Aucune association trouvée !'
		: "Commencez à taper le nom d'une association"}
	labelIdentifier="name"
	bind:setValue
	bind:value
	bind:filterText
	{initialValue}
	on:change
	loadOptions={getAssociations}
/>
