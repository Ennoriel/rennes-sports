<script lang="ts">
	export let label;
	export let value;
	export let options;
	export let disabled;

	function click(e) {
		value = value === e.target.value ? undefined : e.target.value;
	}
</script>

<fieldset>
	<legend>{label}{(disabled && ' (inactif)') || ''}</legend>
	<div>
		{#each options as option}
			<label class:selected={value === option} class:disabled>
				{option}
				<input type="radio" checked={value === option} value={option} {disabled} on:click={click} />
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
		transition: all 0.2s;
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
		color: #777;
		box-shadow: 0 0 5px black;
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
