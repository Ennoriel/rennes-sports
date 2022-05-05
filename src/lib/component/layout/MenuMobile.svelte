<script lang="ts">
	import { fly } from 'svelte/transition';
	import { state } from '$lib/store/state';
	import { display, guard, routes } from '$lib/data/routes';
	import { page, session } from '$app/stores';
	import XOrMenu from '$lib/component/svg/XOrMenu.svelte';
	import Fav from '$lib/component/atom/Fav.svelte';
	import { cities } from '$lib/data/cities';

	import { clickAway } from '$lib/utils/clickAway';
	import { uniqBy } from '$lib/utils/array';

	export let filtrable = true;

	let search = '';
	let isSearching = false;
	let isOpen = false;
	let burgerMenu: HTMLUListElement;

	$: reSearch = new RegExp(search, 'i');

	const uniqCities = uniqBy(cities, (c) => c.id);

	function click({ target }) {
		if (isOpen && !burgerMenu.contains(target)) isOpen = false;
	}

	$: displayedRoutes = display(guard(routes, $session), { mobile: true });
</script>

<svelte:window on:click={click} />

<nav>
	<span id="menu-bar">
		<Fav />
		{#if filtrable}
			<input
				bind:value={search}
				on:click={(e) => {
					isSearching = true;
					e.stopPropagation();
				}}
				aria-label="Recherche globale"
				placeholder="Rennes"
			/>
		{/if}
		<button
			class="menu"
			on:click|stopPropagation={() => {
				$state.isOpen = false;
				isOpen = !isOpen;
			}}
		>
			<XOrMenu visible={!isOpen} />
		</button>
	</span>

	{#if isOpen}
		<ul transition:fly={{ x: -200, duration: 400 }} bind:this={burgerMenu}>
			<li>
				<a on:click={() => (isOpen = false)} href="/">
					<img src="/favicon.png" alt="Icone de l'application" />
				</a>
			</li>
			{#each displayedRoutes as route}
				{@const active = !('spacer' in route) && $page.url.pathname.indexOf(route.route) > 0}
				{#if 'spacer' in route}
					<hr />
				{:else}
					<li>
						<a on:click={() => (isOpen = false)} href="/{route.route}" class:active>
							{#if active}
								&gt;
							{/if}
							{route.label}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	{/if}
</nav>

{#if isSearching}
	<div
		class="options"
		use:clickAway={() => (isSearching = false)}
		on:click={() => (isSearching = false)}
	>
		{#each uniqCities.filter((city) => city.name.match(reSearch)) as city}
			<a href="/recherche/carte/ville/{city.zipCode}">{city.name}</a>
		{/each}
	</div>
{/if}

<style>
	nav {
		height: var(--header-height);
		font-size: 14px;
		color: white;
	}

	#menu-bar {
		height: var(--header-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;

		padding: 0 10px;
		box-sizing: border-box;
		background-color: var(--main-color);

		z-index: 1002;
	}

	input,
	button {
		height: calc(var(--header-height) - 25px);
		border-radius: calc((var(--header-height) - 25px) / 2);
		border: none;
	}

	input {
		flex-grow: 2;
		padding: 0 16px;
		width: 50px;
		box-shadow: 0 0 4px #ddd;
	}

	#menu-bar :focus-visible {
		outline: 2px solid white;
		outline-offset: 2px;
	}

	button {
		cursor: pointer;
	}

	button.menu {
		width: calc(var(--header-height) - 25px);
		background-color: var(--main-color);
		display: flex;
		align-items: center;
		justify-content: center;

		color: white;
	}

	ul {
		position: absolute;
		top: 0;
		width: 200px;
		height: 100vh;
		box-sizing: border-box;
		left: 0;
		z-index: 1001;
		background-color: white;
		color: var(--main-color);
		box-shadow: 5px 0 20px -5px #333;
		margin: 0;
		padding: 16px 32px;
		list-style: none;
	}

	hr {
		margin: 16px 96px 16px 0;
		border: none;
		border-bottom: 0.1px solid var(--main-color);
	}

	ul a {
		display: block;
		text-decoration: none;
		color: inherit;
		font-size: 16px;
		line-height: 32px;

		transition: padding-left 0.4s;
	}

	ul a:not(.active):hover,
	ul a:focus-visible {
		padding-left: 8px;
	}

	ul a:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
		border-radius: 4px;
	}

	ul img {
		width: 40px;
		margin-top: 10px;
	}

	.options {
		position: absolute;
		inset: 80px 20px;
		padding: 10px;
		background-color: #00000088;
		z-index: 10000;
		overflow-y: auto;

		--dark: #333;
	}
	.options a {
		display: block;
	}
	.options a:hover,
	.options a:focus-visible {
		color: var(--secondary-color);
	}
</style>
