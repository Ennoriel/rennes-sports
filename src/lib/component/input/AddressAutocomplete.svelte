<script>
    import Autocomplete from './Autocomplete.svelte';

    export let label = "Adresse"
    export let name = "address"
    export let required;
    export let placeholder = "Ex : 2 Rue du Bosphore, 35200 Rennes"
    export let value

    let isWaiting;

    async function getAddresses(filterText = '') {
        return new Promise((resolve, reject) =>
            fetch(
                `https://api-adresse.data.gouv.fr/search/?autocomplete=1&limit=10&type=housenumber&q=${filterText}`
            )
                .then((res) => res.json())
                .then((res) => res.features)
                .then((addresses) =>
                    // TODO fix https://github.com/etalab/geo.api.gouv.fr/issues/33
                    addresses.filter(
                        (address) => address.properties.type === 'housenumber'
                    )
                )
                .then(a => {
                    return a.map(address => {
                        const label = `${address.properties.name}, ${address.properties.postcode} ${address.properties.city}`
                        return {
                            label,
                            value: {
                                address: label,
                                coordinates: address.geometry?.coordinates
                            }
                        }
                    })
                })
                .then((addresses) => resolve(addresses))
        )
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