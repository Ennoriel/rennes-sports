<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';
	import type { Address, Location } from '../../types/location.type';

	export let label = 'Adresse';
	export let name = 'address';
	export let required = false;
	export let placeholder = 'Ex : 2 Rue du Bosphore, 35200 Rennes';
	export let value: Location | undefined = undefined;

	let isWaiting = false;

	type A = {
		label: string;
		value: Partial<Location>;
	};

	async function getAddresses(filterText = ''): Promise<A[]> {
		return new Promise((resolve) =>
			fetch(
				`https://api-adresse.data.gouv.fr/search/?autocomplete=1&limit=10&type=housenumber&q=${filterText}`
			)
				.then((res) => res.json())
				.then((res: Address) => res.features)
				.then((addresses) =>
					// TODO fix https://github.com/etalab/geo.api.gouv.fr/issues/33
					addresses.filter((address) => address.properties.type === 'housenumber')
				)
				.then((a) => {
					return a.map((address) => {
						const label = `${address.properties.name}, ${address.properties.postcode} ${address.properties.city}`;
						return {
							label,
							value: {
								address: label,
								coordinates: address.geometry?.coordinates
							}
						};
					});
				})
				.then((addresses) => resolve(addresses))
		);
	}
</script>

<Autocomplete
	{label}
	{name}
	{required}
	{placeholder}
	bind:isWaiting
	noOptionsMessage={isWaiting ? 'Chargement des addresses...' : 'Aucune adresse trouvée'}
	bind:value
	loadOptions={getAddresses}
/>
