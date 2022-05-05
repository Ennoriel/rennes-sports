<script lang="ts">
	import Spinner from './Spinner.svelte';

	export let variant: 'primary' | 'secondary' | 'transparent' = 'primary';
	export let shape: 'square' | 'circle' = 'square';
	export let type = 'button';
	export let disabled = false;
	export let pending = false;
</script>

<button {type} on:click class={`${variant} ${shape}`} disabled={disabled || pending}>
	{#if pending}
		<Spinner />
	{/if}
	<slot />
</button>

<style>
	button {
		display: flex;
		flex-grow: 1;
		flex-shrink: 0;
		justify-content: center;
		height: 33px;
		gap: 8px;
		padding: 4px 16px;
		align-items: center;
		cursor: pointer;
		border: none;
		transition: color 0.2s, background-color 0.2s;

		--spinner-size: 18px;
	}

	.primary {
		background-color: var(--main-color);
		color: white;
		border: 1px solid #eeeeee;
		flex-grow: 3;
	}

	.primary:hover {
		background-color: #eeeeee;
		color: black;
		border: 1px solid var(--main-color);
	}

	.secondary {
		background-color: #eeeeee;
		color: #4f4f4f;
	}

	.transparent {
		background-color: transparent;
	}

	.secondary:hover,
	.transparent:hover {
		background-color: var(--main-color);
		color: white;
	}

	.square {
		border-radius: 5px;
	}

	.circle {
		border-radius: 16.5px;
		padding: 4px;
	}

	:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}

	[disabled],
	[disabled]:hover {
		background-color: #eeeeee;
		color: #4f4f4f;
		border: 1px solid #eeeeee;
		cursor: default;
	}
</style>
