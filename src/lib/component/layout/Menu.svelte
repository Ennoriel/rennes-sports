<script lang="ts">
	import { display, getActiveRoute, getRouteLabel, guard, ROUTES } from '$lib/data/routes';
	import { page, session } from '$app/stores';
	import Fav from '$lib/component/atom/Fav.svelte';
	import { state } from '$lib/store/state';

	$: displayedRoutes = display(guard(ROUTES, $session), { mobile: false });
	$: activeRoute = getActiveRoute($page.url.pathname + $page.url.search, displayedRoutes);
	$: $state.isDoubleMenu = !!activeRoute?.subRoutes;
</script>

<nav>
	<span class="menu">
		<Fav />
		{#each displayedRoutes as route}
			{#if 'spacer' in route}
				<span style:flex-grow="1" />
			{:else}
				{@const active = activeRoute?.route === route.route}
				<a
					sveltekit:prefetch
					href={route.route}
					class={route.class}
					class:active
					aria-current={(active && 'page') || undefined}
				>
					<span>
						{getRouteLabel(route, $session)}
					</span>
				</a>
			{/if}
		{/each}
	</span>
	{#if activeRoute?.subRoutes}
		{@const activeSubRoute = getActiveRoute(
			$page.url.pathname + $page.url.search,
			activeRoute.subRoutes
		)}
		<span class="sub-menu">
			{#each activeRoute.subRoutes as route}
				{@const active = activeSubRoute?.route === route.route}
				<a
					sveltekit:prefetch
					href={route.route}
					class:active
					aria-current={(active && 'page') || undefined}
				>
					<span>
						{getRouteLabel(route, $session)}
					</span>
				</a>
			{/each}
		</span>
	{/if}
</nav>

<style>
	nav {
		color: white;
	}

	.menu,
	.sub-menu {
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;

		margin: 0;
		list-style: none;

		display: flex;
		align-items: stretch;
	}

	.menu {
		height: var(--header-height);
		background-color: var(--main-color);
	}

	.sub-menu {
		height: 40px;
		background-color: var(--secondary-color);
	}

	a {
		font-size: 16px;
		line-height: var(--header-height);
		font-weight: 300;

		transition: color 0.2s;
		color: white;
		text-decoration: none;

		padding: 0 16px;
		border-radius: 8px;
	}

	.sub-menu a {
		line-height: 40px;
	}

	.button {
		background: none;
		border: none;
		padding: 0 8px;
	}

	.button span {
		border: 1px solid white;
		height: 32px;
		line-height: 32px;
		margin: calc(var(--header-height) / 2 - 16px) 0;
		display: block;
		padding: 0 12px;
		border-radius: 16px;
		transition: border-color 0.2s;
	}

	.active {
		cursor: default;
	}

	.menu :not(.button).active span {
		border-bottom: 1.5px solid var(--secondary-color);
		padding: 4px 0;
	}

	.menu .button.active span {
		border-color: var(--secondary-color);
	}

	.sub-menu .active span {
		border-bottom: 2px solid white;
		padding: 2px 0;
	}

	.menu a:not(.active):hover {
		color: var(--secondary-color);
	}

	.menu a.button:not(.active):hover span {
		border-color: var(--secondary-color);
	}

	.sub-menu a:not(.active):hover {
		color: var(--main-color);
	}

	:focus-visible {
		outline: 2px solid white;
		outline-offset: -4px;
	}
</style>
