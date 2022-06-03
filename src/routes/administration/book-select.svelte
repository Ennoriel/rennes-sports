<script lang="ts">
	import Autocomplete from '$lib/component/input/Autocomplete.svelte';
	import LocationAutocomplete from '../../lib/component/input/LocationAutocomplete.svelte';
	import AssociationAutocomplete from '../../lib/component/input/AssociationAutocomplete.svelte';
	import type { Association } from '../../lib/types/sport.type';
	import type { Coordinates, Location } from '../../lib/types/location.type';

	let value1: string;
	let value2: string;
	let value3 = 'option 3';
	let value4 = 3;
	let value5: Location;
	let initialValue5 = {
		_id: '6272b0a79b280d9fb0417b4b',
		name: 'Gymnase Jules Issac',
		coordinates: [48.1326335, -1.6692398] as Coordinates
	};
	let value6 = '';
	let initialValue6 = {
		_id: '6272b0a79b280d9fb0417b4b',
		name: 'Gymnase Jules Issac',
		coordinates: [48.1326335, -1.6692398] as Coordinates,
		value: '6272b0a79b280d9fb0417b4b'
	};
	let value7: Association;
	let initialValue7 = {
		_id: '627d56f559e81405c2afd5a5',
		name: "La Tour d'Auvergne",
		website: 'https://www.tourdauvergneasso.com/'
	};
	let value8: Association;
	let initialValue8 = {
		_id: '627d56f559e81405c2afd5a5',
		name: "La Tour d'Auvergne",
		website: 'https://www.tourdauvergneasso.com/',
		value: '627d56f559e81405c2afd5a5'
	};
</script>

<div id="wrapper">
	<h1>Example 1 - default</h1>
	<Autocomplete
		slot="right"
		name="example1"
		label="select input"
		options={['option 1', 'option 2', 'option 3', 'option 4']}
		bind:value={value1}
	/>
	<p>value: {value1}</p>
	<h1>Example 2 - creatable</h1>
	<Autocomplete
		slot="right"
		name="example2"
		label="select input"
		options={['option 1', 'option 2', 'option 3', 'option 4']}
		isCreatable
		bind:value={value2}
	/>
	<p>value: {value2}</p>
	<h1>Example 3 - init value</h1>
	<Autocomplete
		slot="right"
		name="example3"
		label="select input"
		options={['option 1', 'option 2', 'option 3', 'option 4']}
		bind:value={value3}
		initialValue={value3}
	/>
	<p>value: {value3}</p>
	<h1>Example 4 - init value with numbers</h1>
	<Autocomplete
		slot="right"
		name="example4"
		label="select input"
		options={[2, 3, 4, 5]}
		bind:value={value4}
		initialValue={value4}
	/>
	<p>value: {value4}</p>
	<h1>Example 5 - init value with location</h1>
	<LocationAutocomplete
		slot="right"
		name="example5"
		label="select input"
		bind:value={value5}
		initialValue={initialValue5}
	/>
	<p>value: {JSON.stringify(value5)}</p>
	<h1>Example 6 - init value with location value as id</h1>
	<LocationAutocomplete
		slot="right"
		name="example6"
		label="select input"
		bind:value={value6}
		initialValue={initialValue6}
		valueAsId
	/>
	<p>value: {JSON.stringify(value6)}</p>
	<h1>Example 7 - init value with location</h1>
	<AssociationAutocomplete
		slot="right"
		name="example7"
		label="select input"
		bind:value={value7}
		initialValue={initialValue7}
	/>
	<p>value: {JSON.stringify(value7)}</p>
	<h1>Example 8 - init value with location value as id</h1>
	<AssociationAutocomplete
		slot="right"
		name="example8"
		label="select input"
		bind:value={value8}
		initialValue={initialValue8}
		valueAsId
	/>
	<p>value: {JSON.stringify(value8)}</p>
</div>

<style>
	#wrapper {
		max-width: 400px;
		margin: 0 auto;
	}
</style>
