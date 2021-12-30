<script lang="ts">
	export let label;
	export let value;
	export let options;
</script>

<legend>
	{label}
	<div>
		{#each options as option}
			<label class:selected={value === option}>
				{option}
				<input type="radio" bind:group={value} value={option} />
			</label>
		{/each}
	</div>
</legend>

<style>
	legend {
		display: flex;
		flex-direction: column;
		font-size: 17px;
		font-weight: 500;
		gap: 10px;
		margin-top: 20px;
	}
	div {
		line-height: 35px;
	}
	label {
		background-color: #f7f7fa;
		border-radius: 5px;
		padding: 8px 16px;
		margin-right: 5px;
		font-size: 14px;
		cursor: pointer;
		transition: all 0.2s;
		outline: none;
	}
	label:last-of-type {
		margin: 0;
	}
	label.selected {
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
</style>
