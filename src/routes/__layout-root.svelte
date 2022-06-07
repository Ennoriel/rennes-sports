<script lang="ts">
	import '$lib/css/reset.css';
	import '$lib/css/font.css';
	import '$lib/css/theme.css';
	import '$lib/css/scroll.css';
	import '$lib/css/input.css';

	import { navigating } from '$app/stores';
	import PreloadingIndicator from '$lib/component/atom/PreloadingIndicator.svelte';

	function keydown(e: KeyboardEvent) {
		if (e.key === 'Tab') document.body.classList.add('has-been-tabbed');
	}
</script>

<svelte:window on:keydown={keydown} />

{#if $navigating && $navigating.to}
	<PreloadingIndicator />
{/if}

<slot />
