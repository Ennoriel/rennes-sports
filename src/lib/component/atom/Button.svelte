<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'transparent' = 'primary';
	export let shape: 'square' | 'circle' = 'square';
	export let type = 'button';
</script>

<button {type} on:click class={`${variant} ${shape}`}>
	<slot />
</button>

<style>
	button {
		flex-grow: 1;
		height: 33px;
		padding: 4px 16px;
		cursor: pointer;
		border: none;
		transition: color 0.2s, background-color 0.2s;
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

	.secondary:hover, .transparent:hover {
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
</style>
