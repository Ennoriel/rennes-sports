<script context="module" lang="ts">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script lang="ts">
	import { dev } from '$app/env';
	import '$lib/css/reset.css';
	import '$lib/css/font.css';
	import '$lib/css/theme.css';
	import '$lib/css/scroll.css';
	import '$lib/css/input.css';

	export let status: number;
	export let error: Error;
</script>

<main>
	{#if dev}
		<h1>{status}: {error.message}</h1>
		<pre>{error.stack}</pre>
	{:else}
		<h1>Vous semblez loin de la réalité !</h1>
		<p>Pour revenir vers l'accueil : <a href="/">c'est ici !</a></p>
	{/if}
</main>

<style>
	main {
		background-color: var(--main-color);
		height: calc(100vh - var(--header-height));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	main h1 {
		font-size: 72px;
		color: white;
		text-align: center;
	}

	p,
	pre {
		font-size: 24px;
		color: white;
	}

	a {
		font-weight: bolder;
		transition: all 0.2s;
	}

	a:hover {
		color: var(--secondary-color);
	}

	:focus-visible {
		transition: all 0s;
		border-radius: 8px;
		outline: 2px solid white;
		outline-offset: 2px;
	}
</style>
