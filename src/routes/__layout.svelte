<slot />

<style>
	:global(body) {
		--main-color: #002395;
		--header-height: 60px;
	}
	:global(body) {
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		line-height: 1.5em;
		background-color: #fafafa;
		margin: 0;
	}
	:global(*) {
		--dark: #ccc;
		--light: #fafafa;
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
