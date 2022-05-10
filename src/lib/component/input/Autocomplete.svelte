<script lang="ts">
	import Autocomplete from 'svelte-select/no-styles/Select.svelte';
	import Spinner from '../atom/Spinner.svelte';
	import InputHidden from './InputHidden.svelte';

	type Value = string | object;

	export let id = Math.random().toString(36);
	export let name: string;
	export let label: string;
	export let required = false;
	export let placeholder = label;
	export let options: Array<object> | Array<string> | undefined = undefined;
	export let loadOptions: (query: string) => Promise<Array<object>> | undefined = undefined;
	export let filterText: string | undefined = undefined;
	export let labelIdentifier: string | undefined = undefined;
	export let optionIdentifier: string | undefined = undefined;
	export let value: Value | undefined = undefined;
	export let isCreatable = false;
	export let isDisabled = false;
	export let isMulti = false;
	export let isWaiting = false;
	export let noOptionsMessage = 'Aucun résultat';

	let boundValue: { index: number; value: Value } | any | undefined;

	$: value = boundValue?.value || boundValue?.[optionIdentifier] || boundValue;

	// hack to make select required in a native way
	$: inputAttributes = {
		required: required && !value
	};
</script>

<span class="autocomplete">
	<label for={id}>
		{label}
	</label>
	<Autocomplete
		{id}
		{placeholder}
		{inputAttributes}
		items={options}
		{loadOptions}
		{labelIdentifier}
		{optionIdentifier}
		bind:value={boundValue}
		bind:filterText
		{isCreatable}
		{isDisabled}
		{isMulti}
		bind:isWaiting
		listPlacement="bottom"
		LoadingIcon={Spinner}
		showChevron={true}
		listOffset={8}
		debounceWait={200}
		getOptionLabel={(option, filterText) =>
			option.isCreator ? `Créer \"${filterText}\"` : option.label}
		{noOptionsMessage}
		ariaValues={(values) => `Option ${values}, selectionné.`}
		ariaListOpen={(label, count) => `Focus sur l'option ${label} parmi ${count} résultats.`}
		ariaFocused={() =>
			`Le select a le focus, tapez pour filtrer les résultats, appuyez sur la touche "bas" pour ouvrir les options.`}
	/>
</span>

<InputHidden {name} {value} />

<style>
	.autocomplete {
		--select-height: 42px;
		--select-bg-color: white;
		--select-height-half: calc(var(--select-height) / 2);
		--spinner-size: 20px;

		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 20px;
	}
	.autocomplete :global(.svelte-select) {
		height: var(--select-height);
		border-radius: var(--select-height-half);
		display: flex;
		position: relative;
		background-color: var(--select-bg-color);
	}
	.autocomplete :global(input) {
		position: absolute;
		background-color: transparent;
		height: var(--select-height);
		padding: 0 var(--select-height-half);
		border-radius: var(--select-height-half);
		color: var(--main-color);
		border: none;
		width: 100%;

		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	}
	.autocomplete :global(:focus-visible) {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
	.autocomplete :global(.a11y-text) {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
	.autocomplete :global(.selected-item) {
		line-height: var(--select-height);
		padding-left: var(--select-height-half);
		color: var(--main-color);
	}
	.autocomplete :global(.icons) {
		position: absolute;
		display: flex;
		gap: 8px;
		right: calc(var(--select-height) / 4);
		top: calc((var(--select-height) - 20px) / 2);
		transition: color 0.2s;
	}
	.autocomplete :global(.clear-select),
	.autocomplete :global(.chevron),
	.autocomplete :global(svg) {
		width: 20px;
		height: 20px;
		color: #c5cacf;
		transition: color 0.2s;
		cursor: pointer;
	}
	.autocomplete :global(svg:hover) {
		transition: color 0.2s;
	}
	.autocomplete :global(svg:hover) {
		color: var(--main-color);
	}
	.autocomplete :global(.list) {
		background-color: var(--select-bg-color);
		border-radius: calc(3 * var(--select-height) / 8);
		z-index: 1;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

		max-height: calc(4 * var(--select-height));
		overflow-y: auto;
	}
	.autocomplete :global(.list-item:first-of-type .item) {
		border-top-left-radius: calc(3 * var(--select-height) / 8);
		border-top-right-radius: calc(3 * var(--select-height) / 8);
	}
	.autocomplete :global(.list-item:last-of-type .item) {
		border-bottom-left-radius: calc(3 * var(--select-height) / 8);
		border-bottom-right-radius: calc(3 * var(--select-height) / 8);
	}
	.autocomplete :global(.item) {
		padding: 5px 0 5px var(--select-height-half);
		font-weight: 300;
		letter-spacing: 0.1px;
		cursor: pointer;
	}
	.autocomplete :global(.empty) {
		padding: 5px 0 5px var(--select-height-half);
		font-weight: 300;
	}
	.autocomplete :global(.item.hover),
	.autocomplete :global(.item.active) {
		font-weight: bold;
		background-color: #e3eaff;
		letter-spacing: -0.1px;
	}
</style>
