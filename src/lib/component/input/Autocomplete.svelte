<script lang="ts">
	import Autocomplete from 'svelte-select';

	type Value = string | { label: string; value: string };

	export let label: string;
	export let placeholder = label;
	export let value: Value;
	export let options: Array<{ label: string; value: string }> | Array<string>;
	export let isCreatable = false;
	export let isDisabled = false;
	export let isMulti = false;

	let boundValue: { index: number; value: Value } | undefined;

	$: value = boundValue?.value;
</script>

<label>
	{label}
	<Autocomplete
		{label}
		{placeholder}
		items={options}
		bind:value={boundValue}
		{isCreatable}
		{isDisabled}
		{isMulti}
		getOptionLabel={(option, filterText) =>
			option.isCreator ? `Créer \"${filterText}\"` : option.label}
	/>
</label>

<style>
	label {
		--height: 33px;
		--clearSelectTop: 8px;
		--backgroundColor: #eee;
		--borderColor: #e3e3e3;
		--borderHoverColor: #e3e3e3;
		--borderFocusColor: #e3e3e3;

		--itemIsActiveBG: var(--main-color);
	}
</style>
