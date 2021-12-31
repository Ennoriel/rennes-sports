<script>
	import FloatingButton from './FloatingButton.svelte';
	import { state } from '../store/state';

	export let pageRef;

	function click({ target }) {
		if ($state.isOpen && pageRef.contains(target)) $state.isOpen = false;
	}
</script>

<svelte:window on:click={click} />

<div class:isOpen={$state.isOpen}>
	<slot />
</div>

<FloatingButton on:click={() => ($state.isOpen = true)} hidden={$state.isOpen} />

<style>
	div {
		background-color: white;
		position: fixed;
		height: calc(100vh - var(--header-height));
		width: 300px;
		transform: translateX(-300px);
		transition: all 0.4s;
		box-shadow: 0 0 10px black;
		overflow-y: auto;
		overflow-x: hidden;

		z-index: 1001;
	}

	.isOpen {
		transform: translateX(0);
	}
</style>
