<script lang="ts">
	export let label;
	export let value = [];
	export let options;
</script>

<fieldset>
	<legend>{label}</legend>
	<div>
		{#each options as option}
			<label class:selected={value && value.includes(option)}>
				{option}
				<input type="checkbox" bind:group={value} value={option} />
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
	label.selected {
		background-color: var(--main-color);
		color: white;
		cursor: default;
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
</style>
