<script lang="ts">
	import FloatingButton from './FloatingButton.svelte';
	import { state } from '$lib/store/state';
	import { fly } from 'svelte/transition';

	export let pageRef: HTMLElement;

	function click({ target }) {
		if ($state.isOpen && pageRef.contains(target)) $state.isOpen = false;
	}

	function keydown(e: KeyboardEvent) {
		if (e.key === 'Escape') $state.isOpen = false;
	}
</script>

<svelte:window on:click={click} on:keydown={keydown} />

<FloatingButton on:click={() => ($state.isOpen = true)} hidden={$state.isOpen} />

{#if $state.isOpen}
	<div transition:fly|local={{ x: -200, duration: 400 }} class:top={!$state.isPin}>
		<slot />
	</div>
{/if}

<style>
	div {
		background-color: white;
		position: fixed;
		top: var(--header-height);
		width: 300px;
		transition: all 0.4s;
		box-shadow: 5px 0 20px -5px #333;
		overflow-y: auto;
		overflow-x: hidden;
		bottom: 0;

		z-index: 1001;
	}
	.top {
		top: 0;
	}
</style>
