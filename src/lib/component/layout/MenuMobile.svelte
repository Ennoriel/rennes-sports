<script lang="ts">
	import { fly } from 'svelte/transition';
	import { state } from '$lib/store/state';
	import { display, getActiveRoute, getRouteLabel, guard, ROUTES } from '$lib/data/routes';
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
	let burgerMenu: HTMLDivElement;

	$: reSearch = new RegExp(search, 'i');

	const uniqCities = uniqBy(cities, (c) => c.id);

	function click({ target }) {
		if (isOpen && !burgerMenu.contains(target)) isOpen = false;
	}

	$: displayedRoutes = display(guard(ROUTES, $session), { mobile: true });
	$: activeRoute = getActiveRoute($page.url.pathname + $page.url.search, displayedRoutes);
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
			on:click|stopPropagation={() => {
				$state.isOpen = false;
				isOpen = !isOpen;
			}}
		>
			<XOrMenu visible={!isOpen} />
		</button>
	</span>

	{#if isOpen}
		<div class="menu" transition:fly={{ x: -200, duration: 400 }} bind:this={burgerMenu}>
			<a on:click={() => (isOpen = false)} href="/">
				<img src="/favicon.png" alt="Icone de l'application" />
			</a>
			{#each displayedRoutes as route}
				{#if 'spacer' in route}
					<hr />
				{:else}
					{@const active = activeRoute?.route === route.route}
					<a
						sveltekit:prefetch
						on:click={() => (isOpen = false)}
						href={route.route}
						class:active
						aria-current={(active && 'page') || undefined}
					>
						{#if active}
							&gt;
						{/if}
						{getRouteLabel(route, $session)}
					</a>
					{#if route.subRoutes}
						<div class="sub-menu">
							{#each route.subRoutes as subRoute}
								{@const active = $page.url.pathname.indexOf(subRoute.route) >= 0}
								<a
									sveltekit:prefetch
									on:click={() => (isOpen = false)}
									href={subRoute.route}
									class:active
									aria-current={(active && 'page') || undefined}
								>
									{#if active}
										&gt;
									{/if}
									{getRouteLabel(subRoute, $session)}
								</a>
							{/each}
						</div>
					{/if}
				{/if}
			{/each}
		</div>
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
		width: calc(var(--header-height) - 25px);
		background-color: var(--main-color);
		display: flex;
		align-items: center;
		justify-content: center;

		color: white;
	}

	.menu {
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
		font-size: 16px;
		line-height: 2em;
	}

	.menu hr {
		margin: 16px 96px 16px 0;
		border: none;
		border-bottom: 0.1px solid var(--main-color);
	}

	.menu a {
		display: block;
		text-decoration: none;
		color: inherit;
		transition: padding-left 0.4s;
	}

	.menu a.active {
		cursor: default;
	}

	.menu a:not(.active):hover,
	.menu a:focus-visible {
		padding-left: 8px;
	}

	.menu a:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
		border-radius: 4px;
	}

	.menu img {
		width: 40px;
		margin-top: 10px;
	}

	.sub-menu {
		margin-left: 16px;
		font-size: 14px;
		line-height: 1.75em;
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
