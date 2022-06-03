<script lang="ts">
	import Autocomplete from '$lib/component/input/Autocomplete.svelte';

	let value1: string;
	let value2: string;
	let value3 = 'option 3';
	let value4 = 3;
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
</div>

<style>
	#wrapper {
		max-width: 400px;
		margin: 0 auto;
	}
</style>
