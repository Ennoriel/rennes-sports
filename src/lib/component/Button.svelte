<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';
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
		transition: all 0.4s;
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

	.secondary:hover {
		background-color: var(--main-color);
		color: white;
	}

	.square {
		border-radius: 5px;
	}

	.circle {
		border-radius: 16.5px;
		background-color: transparent;
		padding: 4px;
	}
</style>
