<script lang="ts">
	import type { SelectableOption, SelectableValue } from '$lib/types/input.type';

	export let label: string;
	export let name: string;
	export let ariaLabel: string | undefined = undefined;
	export let placeholder = label;
	export let value: any = undefined;
	export let options: Array<SelectableValue> = [];
	export let variant: 'square' | 'rounded' = 'rounded';

	let _options: Array<SelectableOption>;

	$: _options = (
		options.some((o) => typeof o === 'object' && 'value' in o && 'label' in o)
			? options
			: options.map((o) => ({ label: o, value: o }))
	) as Array<SelectableOption>;
</script>

<label class="input" class:square={variant === 'square'} class:rounded={variant === 'rounded'}>
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
	option {
		color: black;
	}
</style>
