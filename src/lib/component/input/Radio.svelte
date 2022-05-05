<script lang="ts">
	export let label;
	export let name;
	export let required;
	export let value;
	export let options: Array<{ label: string; value: string }> | Array<string>;
	export let disabled;

	$: _options = options.some((o) => typeof o === 'object' && 'value' in o && 'label' in o)
		? options
		: options.map((o) => ({ label: o, value: o }));
</script>

<fieldset>
	<legend>{label}{(disabled && ' (inactif)') || ''}</legend>
	<div>
		{#each _options as option}
			<label class:selected={value === option.value} class:disabled>
				{option.label}
				<input type="radio" {name} {required} bind:group={value} value={option.value} {disabled} />
			</label>
		{/each}
	</div>
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
		border: none;
		font-size: 14px;
		gap: 10px;
		margin: 20px 0 0;
		padding: 0;
	}
	legend {
		margin-bottom: 10px;
		font-weight: 700;
	}
	label {
		display: inline-block;
		background-color: #eeeeee;
		border-radius: 5px;
		padding: 6px 12px;
		margin: 0 5px 5px 0;
		font-size: 14px;
		cursor: pointer;
		transition: color 0.2s, background-color 0.2s;
		outline: none;
		user-select: none;
	}
	label:last-of-type {
		margin: 0;
	}
	.selected {
		background-color: var(--main-color);
		color: white;
	}
	:global(.has-been-tabbed) label:focus-within {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
	input {
		opacity: 0;
		position: absolute;
		pointer-events: none;
	}
	.disabled {
		cursor: not-allowed;
	}
	:not(.selected).disabled {
		color: #4f4f4f;
	}
</style>
