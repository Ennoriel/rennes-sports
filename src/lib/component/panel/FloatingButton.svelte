<script>
	export let hidden;
</script>

<button on:click class:hidden> Filtrer </button>

<style>
	button {
		color: white;
		font-size: 16px;
		font-weight: 500;
		position: fixed;
		bottom: 24px;
		left: 24px;
		outline: none;
		border-radius: 5px;
		padding: 8px 16px;
		border: none;
		cursor: pointer;

		background-color: var(--secondary-color);

		z-index: 401;
	}

	button.hidden {
		pointer-events: none;
		opacity: 0;
	}

	button:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>
