<script>
	import { navigating } from '$app/stores';
	import PreloadingIndicator from '$lib/component/atom/PreloadingIndicator.svelte';

	function keydown(e) {
		if (e.key === 'Tab') document.body.classList.add('has-been-tabbed');
	}
</script>

<svelte:window on:keydown={keydown} />

{#if $navigating && $navigating.to}
	<PreloadingIndicator />
{/if}

<slot />

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		text-decoration: none;
		box-sizing: border-box;
	}
	:global(a) {
		color: inherit;
	}
	:global(body) {
		--main-color: #002395;
		--secondary-color: #ed1f3a;
		--focus-color: var(--main-color);
		--bg-color: #f7f7fa;
		--header-height: 60px;
	}
	:global(body) {
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		line-height: 1.5;
		background-color: var(--bg-color);
		margin: 0;
	}
	:global(button) {
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		cursor: pointer;
	}
	:global(*) {
		--dark: #ccc;
		--light: #00000000;
		scrollbar-width: thin;
		scrollbar-color: var(--dark) var(--light);
		scroll-behavior: smooth;
	}
	:global(*::-webkit-scrollbar-track) {
		background: var(--light);
	}
	:global(*::-webkit-scrollbar-thumb) {
		background-color: var(--dark);
	}
	:global(*::-webkit-scrollbar) {
		width: 7px;
	}
</style>
