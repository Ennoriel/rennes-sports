<script lang="ts">
	export let label: string;
	export let name: string;
	export let required = false;
	export let placeholder = label;
	export let value = '';
</script>

<label>
	{label}
	<input type="text" {name} {required} bind:value {placeholder} />
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		font-size: 14px;
		font-weight: 500;
		gap: 10px;
		margin-top: 20px;
	}
	input {
		outline: none;
		margin: 0;
		border: 1px solid #e3e3e3;
		height: 33px;
		border-radius: 5px;
		padding: 0 0 0 10px;
	}

	:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>
