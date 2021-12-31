<script>
	export let hidden
</script>

<button on:click class:hidden>
	Filtrer
</button>

<style>
	button {
		color: white;
		font-size: 16px;
		font-weight: 500;
		position: fixed;
		bottom: 50px;
		left: 50px;
		outline: none;
		border-radius: 5px;
		padding: 12px 24px;
		border: none;
		cursor: pointer;

		background: linear-gradient(90deg, var(--main-color), #0035e2 50%, var(--main-color) 100%);
		background-size: 200% 100%;
		animation: background-gradient 5s infinite linear;
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
