<script>
	function keydown(e) {
		if (e.key === 'Tab') document.body.classList.add('has-been-tabbed');
	}
</script>

<svelte:window on:keydown={keydown} />

<slot />

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    :global(a) {
        color: inherit;
    }
	:global(body) {
		--main-color: #002395;
		--secondary-color: #ed1f3a;
		--bg-color: #f7f7fa;
		--header-height: 60px;
	}
	:global(body) {
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		line-height: 1.5em;
		background-color: var(--bg-color);
		margin: 0;
	}
	:global(*) {
		--dark: #ccc;
		--light: var(--bg-color);
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
