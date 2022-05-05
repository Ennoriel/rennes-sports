<script lang="ts">
	import FloatingButton from './FloatingButton.svelte';
	import { state } from '$lib/store/state';
	import { fly } from 'svelte/transition';

	export let pageRef: HTMLElement;

	function click({ target }) {
		if ($state.isOpen && pageRef.contains(target)) $state.isOpen = false;
	}
</script>

<svelte:window on:click={click} />

<FloatingButton on:click={() => ($state.isOpen = true)} hidden={$state.isOpen} />

{#if $state.isOpen}
	<div transition:fly|local={{ x: -200, duration: 400 }}>
		<slot />
	</div>
{/if}

<style>
	div {
		background-color: white;
		position: fixed;
		height: calc(100vh - var(--header-height));
		width: 300px;
		transition: all 0.4s;
		box-shadow: 5px 0 20px -5px #333;
		overflow-y: auto;
		overflow-x: hidden;

		z-index: 1001;
	}
</style>
