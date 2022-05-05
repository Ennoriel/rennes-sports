<script>
    import Autocomplete from './Autocomplete.svelte';

    export let label = "Lieu"
    export let name = "name"
    export let required
    export let placeholder = "Ex : Parc de la Poterie"
    export let value

    let isWaiting;

    async function getLocations(filterText = '') {
        return new Promise((resolve, reject) =>
            fetch(`/api/locations.json?filter=${encodeURIComponent(filterText)}`)
                .then((res) => res.json())
                .then(res => res.map(l => ({...l, label: l.name})))
                .then((locations) => resolve(locations))
        )
    }
</script>

<Autocomplete
    {label}
    {name}
    {required}
    {placeholder}
    bind:isWaiting
    noOptionsMessage={isWaiting ? 'Chargement des lieux...' : 'Aucun lieu trouvé. Vous pouvez le créer ;)'}
    labelIdentifier="name"
    bind:value
    loadOptions={getLocations}
/>