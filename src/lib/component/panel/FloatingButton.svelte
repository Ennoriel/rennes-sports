<script lang="ts">
	export let hidden = false;
</script>

{#if !hidden}
	<button on:click>Filtrer</button>
{/if}

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
		cursor: pointer;
		transition: all 0.2s;

		background-color: var(--secondary-color);
		border: 1px solid var(--secondary-color);

		z-index: 401;
	}

	:hover {
		background-color: #eeeeee;
		color: var(--secondary-color);
	}

	button:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>
