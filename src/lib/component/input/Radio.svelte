<script lang="ts">
	export let label;
	export let value;
	export let options;
	export let disabled;
</script>

<fieldset>
	<legend>{label}{(disabled && ' (inactif)') || ''}</legend>
	<div>
		{#each options as option}
			<label class:selected={value === option} class:disabled>
				{option}
				<input type="radio" bind:group={value} value={option} {disabled} />
			</label>
		{/each}
	</div>
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
		border: none;
		font-size: 17px;
		font-weight: 500;
		gap: 10px;
		margin: 20px 0 0;
		padding: 0;
	}
	legend {
		margin-bottom: 10px;
	}
	label {
		display: inline-block;
		background-color: #eeeeee;
		border-radius: 5px;
		padding: 8px 16px;
		margin: 0 5px 5px 0;
		font-size: 14px;
		cursor: pointer;
		transition: all 0.2s;
		outline: none;
	}
	label:last-of-type {
		margin: 0;
	}
	.selected {
		background-color: var(--main-color);
		color: white;
		cursor: default;
	}
	label:focus-within {
		color: #777;
		box-shadow: 0 0 5px black;
	}
	input {
		opacity: 0;
		position: absolute;
	}
	.disabled {
		cursor: not-allowed;
	}
	:not(.selected).disabled {
		color: #4f4f4f;
	}
</style>
