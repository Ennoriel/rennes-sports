<script lang="ts">
	import '$lib/css/reset.css';
	import '$lib/css/font.css';
	import '$lib/css/theme.css';
	import '$lib/css/scroll.css';
	import '$lib/css/input.css';

	function keydown(e: KeyboardEvent) {
		if (e.key === 'Tab') document.body.classList.add('has-been-tabbed');
	}
</script>

<svelte:window on:keydown={keydown} />

<slot />
