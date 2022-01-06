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

		background-color: var(--main-color);
		transition: all 0.4s;

		z-index: 401;
	}
	button:hover {
		box-shadow: 0 0 10px black;
	}
	button.hidden {
		pointer-events: none;
		opacity: 0;
	}

	@keyframes background-gradient {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 200% 0;
		}
	}
</style>
