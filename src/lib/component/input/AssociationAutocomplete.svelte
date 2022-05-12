<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';
	import type { Association } from '$lib/types/sport.type';

	export let label = 'Association';
	export let name = 'association';
	export let required = false;
	export let placeholder = "Ex : Association de la Tour d'Argent";
	export let value: string | undefined = undefined;
	export let filterText: string | undefined = undefined;
	export let listPlacement: 'auto' | 'top' | 'bottom' = 'bottom';
	export let variant: 'square' | 'rounded' = 'rounded';

	let isWaiting = false;

	async function getAssociations(filterText = ''): Promise<{ label?: string; value?: string }[]> {
		return new Promise((resolve) =>
			fetch(`/api/associations?filter=${encodeURIComponent(filterText)}`)
				.then((res) => res.json())
				.then((associations: Array<Partial<Association>>) =>
					associations.map((a) => ({ label: a.name, value: a._id }))
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
	bind:value
	bind:filterText
	loadOptions={getAssociations}
/>
