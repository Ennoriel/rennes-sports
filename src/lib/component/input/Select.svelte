<script lang="ts">
	import type { SelectableOption, SelectableValue } from '$lib/types/input.type';

	export let label: string;
	export let name: string;
	export let ariaLabel: string | undefined = undefined;
	export let placeholder = label;
	export let value: any = '';
	export let options: Array<SelectableValue> = [];

	let _options: Array<SelectableOption>;

	$: _options = (
		options.some((o) => typeof o === 'object' && 'value' in o && 'label' in o)
			? options
			: options.map((o) => ({ label: o, value: o }))
	) as Array<SelectableOption>;
</script>

<label>
	{label}
	<select bind:value on:input {name} aria-label={ariaLabel}>
		<option value={undefined}>{placeholder || ''}</option>
		{#each _options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		font-size: 14px;
		font-weight: 700;
		gap: 10px;
		margin-top: 20px;
	}
	select {
		outline: none;
		margin: 0;
		border: 1px solid #e3e3e3;
		background-color: #eeeeee;
		height: 33px;
		border-radius: 5px;
		padding: 0 0 0 10px;
	}
	select:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
	option {
		color: black;
	}
</style>
