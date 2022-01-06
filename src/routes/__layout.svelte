<slot />

<style>
	:global(body) {
		--main-color: #002395;
        --secondary-color: #ED1F3A;
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
