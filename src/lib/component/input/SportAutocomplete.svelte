<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';
	import type { AutocompleteSetValue } from '$lib/types/input.type';
	import { SPORTS } from '../../data/sports';

	export let label = 'Sport';
	export let name = 'sport';
	export let required = false;
	export let isCreatable = false;
	export let filterText: string | undefined = undefined;
	export let placeholder = 'Patin sur glace';
	export let value: string | undefined = undefined;
	export let variant: 'square' | 'rounded' = 'rounded';
	export let setValue: AutocompleteSetValue = undefined;
	export let initialValue: string | undefined = undefined;

	let isWaiting = false;

	async function getSports(filterText = ''): Promise<{ label: string; value: string }[]> {
		const filterRegex = new RegExp(filterText, 'i');
		return new Promise((resolve) =>
			fetch(`/api/sports/distinct?filter=${encodeURIComponent(filterText)}`)
				.then((res) => res.json())
				.then((res) => [...new Set([...res, ...SPORTS.filter((s) => filterRegex.test(s))])])
				.then((res) => res.sort((a, b) => a.localeCompare(b)))
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
	bind:setValue
	bind:value
	{initialValue}
	bind:filterText
	on:change
	loadOptions={getSports}
/>
