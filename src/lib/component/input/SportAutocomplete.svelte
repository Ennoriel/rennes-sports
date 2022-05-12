<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';

	export let label = 'Sport';
	export let name = 'sport';
	export let required = false;
	export let isCreatable = false;
	export let filterText: string | undefined = undefined;
	export let placeholder = 'Ex : Patin sur glace';
	export let value: string | undefined = undefined;
	export let variant: 'square' | 'rounded' = 'rounded';

	let isWaiting = false;

	async function getSports(filterText = ''): Promise<{ label: string; value: string }[]> {
		return new Promise((resolve) =>
			fetch(`/api/sports/distinct?filter=${encodeURIComponent(filterText)}`)
				.then((res) => res.json())
				.then((res: Array<string>) => res.map((s) => ({ label: s, value: s })))
				.then(resolve)
		);
	}
</script>

<Autocomplete
	{label}
	{name}
	{required}
	{isCreatable}
	{placeholder}
	{variant}
	bind:isWaiting
	noOptionsMessage={isWaiting
		? 'Chargement des sports...'
		: filterText?.length > 3
		? 'Aucun sport trouvé !'
		: 'Commencez à taper un sport'}
	bind:value
	bind:filterText
	loadOptions={getSports}
/>
