<script lang="ts">
	import Autocomplete from './Autocomplete.svelte';
	import type { Address, Coordinates, Location } from '$lib/types/location.type';

	export let label = 'Adresse';
	export let name = '$';
	export let required = false;
	export let placeholder = '2 Rue du Bosphore, 35200 Rennes';
	export let value: Location | undefined = undefined;
	export let variant: 'square' | 'rounded' = 'rounded';

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
								coordinates:
									address.geometry &&
									([
										address.geometry.coordinates[1],
										address.geometry.coordinates[0]
									] as Coordinates)
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
	{variant}
	bind:isWaiting
	noOptionsMessage={isWaiting ? 'Chargement des addresses...' : 'Aucune adresse trouvée'}
	bind:value
	loadOptions={getAddresses}
/>
