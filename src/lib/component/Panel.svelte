<script>
	import FloatingButton from './FloatingButton.svelte';
	import { state } from '../store/state';

	let panel
	let button

	function click({ target }) {
		if ($state.isOpen && !panel.contains(target) && !button.contains(target)) $state.isOpen = false;
	}
</script>

<svelte:window on:click={click} />

<div bind:this={panel} class:isOpen={$state.isOpen}>
	<slot />
</div>

<FloatingButton bind:button />

<style>
	div {
		background-color: white;
		position: fixed;
		height: calc(100vh - var(--header-height));
		width: 300px;
		transform: translateX(-300px);
		transition: all .4s;
		box-shadow: 0 0 10px black;
		overflow-y: auto;
		overflow-x: hidden;

		z-index: 1001;
	}

	.isOpen {
		transform: translateX(0);
	}
</style>