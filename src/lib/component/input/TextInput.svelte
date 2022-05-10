<script lang="ts">
	export let label: string;
	export let name: string;
	export let required = false;
	export let placeholder = label;
	export let value = '';
	export let variant: 'square' | 'rounded' = 'rounded';
</script>

<label class:square={variant === 'square'} class:rounded={variant === 'rounded'}>
	{label}
	<input type="text" {name} {required} bind:value {placeholder} />
</label>

<style>
	label.square {
		display: flex;
		flex-direction: column;
		font-size: 14px;
		font-weight: 500;
		gap: 10px;
		margin-top: 20px;
	}
	label.square input {
		outline: none;
		margin: 0;
		border: 1px solid #e3e3e3;
		height: 33px;
		border-radius: 5px;
		padding: 0 0 0 10px;
	}
	label.rounded {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-bottom: 16px;
		font-weight: 100;
	}
	label.rounded input {
		height: 42px;
		border-radius: 21px;
		border: none;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
		padding: 0 16px;
		color: var(--main-color);
		text-align: center;
		margin-top: 6px;
	}

	:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>
