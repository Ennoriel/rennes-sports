<script lang="ts">
	import Autocomplete from 'svelte-select/no-styles/Select.svelte';
	import Spinner from '../atom/Spinner.svelte';
	import InputHidden from './InputHidden.svelte';
	import Label from './Label.svelte';
	import type { AutocompleteSetValue, AutocompleteValue } from '$lib/types/input.type';

	export let id = Math.random().toString(36);
	export let name: string;
	export let label: string;
	export let required = false;
	export let placeholder = label;
	export let options: Array<object> | Array<string> | Array<number> | undefined = undefined;
	export let loadOptions: (query: string) => Promise<Array<object>> | undefined = undefined;
	export let filterText: string | undefined = undefined;
	export let labelIdentifier: string | undefined = undefined;
	export let optionIdentifier: string | undefined = undefined;
	export let value: AutocompleteValue | undefined = undefined;
	export let initialValue: AutocompleteValue | undefined = undefined;
	export let isCreatable = false;
	export let isDisabled = false;
	export let isMulti = false;
	export let isWaiting = false;
	export let listPlacement: 'auto' | 'top' | 'bottom' = 'bottom';
	export let noOptionsMessage = 'Aucun résultat';
	export let variant: 'square' | 'rounded' = 'rounded';
	export const setValue: AutocompleteSetValue = (v) => {
		boundValue = v;
	};

	if (initialValue && !options) {
		options = [initialValue] as Array<object> | Array<string> | Array<number>;
		setTimeout(() => {
			options = undefined;
		}, 0);
	}

	let boundValue: { index: number; value: AutocompleteValue } | any | undefined = initialValue;

	$: value = boundValue?.value || boundValue?.[optionIdentifier] || boundValue;

	// hack to make select required in a native way
	$: inputAttributes = {
		required: required && !value
	};
</script>

<fieldset
	class="autocomplete"
	class:square={variant === 'square'}
	class:rounded={variant === 'rounded'}
>
	<Label {variant} for={id}>
		{label}
	</Label>
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
		on:change
		{isCreatable}
		{isDisabled}
		{isMulti}
		bind:isWaiting
		{listPlacement}
		LoadingIcon={Spinner}
		showChevron={true}
		listOffset={8}
		debounceWait={200}
		getOptionLabel={(option, filterText) =>
			option.isCreator ? `Créer "${filterText}"` : option.label}
		{noOptionsMessage}
		ariaValues={(values) => `Option ${values}, selectionné.`}
		ariaListOpen={(label, count) => `Focus sur l'option ${label} parmi ${count} résultats.`}
		ariaFocused={() =>
			`Le select a le focus, tapez pour filtrer les résultats, appuyez sur la touche "bas" pour ouvrir les options.`}
	/>
</fieldset>

<InputHidden {name} {value} />

<style>
	.autocomplete :global(label.input) {
		margin: 0;
	}
	.autocomplete.rounded {
		--select-height: 42px;
		--select-height-half: calc(var(--select-height) / 2);
		--border-radius: var(--select-height-half);
		--border-radius-list: 16px;
		--select-bg-color: white;
		--spinner-size: 20px;
		--input-color: var(--main-color);
	}
	.autocomplete.square {
		--select-height: 33px;
		--select-height-half: calc(var(--select-height) / 2);
		--border-radius: 5px;
		--border-radius-list: 5px;
		--select-bg-color: white;
		--spinner-size: 18px;
		--input-color: var(--text-color);
	}
	.autocomplete {
		display: flex;
		flex-direction: column;
		gap: 10px;
		border: none;
	}
	.autocomplete :global(.svelte-select) {
		margin-bottom: 16px;
		height: var(--select-height);
		border-radius: var(--border-radius);
		display: flex;
		position: relative;
		background-color: var(--select-bg-color);
	}
	.autocomplete :global(input) {
		position: absolute;
		background-color: transparent;
		height: var(--select-height);
		padding: 0 var(--select-height-half);
		border-radius: var(--border-radius);
		color: var(--input-color);
		border: none;
		width: 100%;

		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	}
	.autocomplete :global(:focus-visible) {
		outline: 1px solid var(--focus-color);
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
		border-radius: var(--border-radius-list);
		z-index: 1;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

		max-height: calc(4 * var(--select-height));
		overflow-y: auto;
		scroll-snap-type: y mandatory;
	}
	.autocomplete :global(.list-item:first-of-type .item) {
		border-top-left-radius: var(--border-radius-list);
		border-top-right-radius: var(--border-radius-list);
	}
	.autocomplete :global(.list-item:last-of-type .item) {
		border-bottom-left-radius: var(--border-radius-list);
		border-bottom-right-radius: var(--border-radius-list);
	}
	.autocomplete :global(.item) {
		padding: 5px 0 5px var(--select-height-half);
		font-weight: 300;
		letter-spacing: 0.1px;
		cursor: pointer;
		scroll-snap-align: start;
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
