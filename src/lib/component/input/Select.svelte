<script lang="ts">
	export let label;
	export let ariaLabel = label;
	export let placeholder = label;
	export let value;
	export let options: Array<{ label: string; value: string }> | Array<string>;
</script>

<label>
	{label}
	<select bind:value on:input aria-label={ariaLabel}>
		<option value={undefined}>{placeholder || ''}</option>
		{#each options as option}
			<option value={option.value !== undefined ? option.value : option}
				>{option.label || option}</option
			>
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
		transition: all 0.2s;
	}
	select:focus-visible {
		color: #777;
		box-shadow: 0 0 5px black;
	}
	option {
		color: black;
	}
</style>
