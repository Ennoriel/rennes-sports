<script lang="ts">
	import { navigating } from '$app/stores';
	import PreloadingIndicator from '$lib/component/atom/PreloadingIndicator.svelte';
</script>

{#if $navigating && $navigating.to}
	<PreloadingIndicator />
{/if}

<slot />
