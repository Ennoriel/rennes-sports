<script>
	import { state } from '../store/state';

	export let button
</script>

<button bind:this={button} on:click={() => $state.isOpen = true} class:isOpen={$state.isOpen}>
	Filtrer
</button>

<style>
	button {
			position: fixed;
			bottom: 50px;
			left: 50px;
			outline: none;
			padding: 15px 25px;
			border-radius: 25px;
      border: 1px solid white;
			cursor: pointer;

			background: linear-gradient(90deg, #d0a9d1, #d079a1 50%, #d0a9d1 100%);
			background-size: 200% 100%;
      animation: background-gradient 5s infinite linear;
			transition: all .4s;
	}
	button:hover {
			border: 1px solid #777;
			box-shadow: 0 0 10px black;
	}
	button.isOpen {
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