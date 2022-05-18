<script lang="ts">
	import { display, guard, routes } from '$lib/data/routes';
	import type { Route } from '$lib/data/routes';
	import { page, session } from '$app/stores';
	import Fav from '$lib/component/atom/Fav.svelte';

	$: displayedRoutes = display(guard(routes, $session), { mobile: false }) as Array<Route>;
	$: isCreateAccountActive = $page.url.pathname.indexOf('utilisateur/creer-son-compte') > 0;
	$: isLoginActive = $page.url.pathname.indexOf('utilisateur/connexion') > 0;
</script>

<nav>
	<ul>
		<li style:display="flex">
			<Fav />
		</li>
		{#each displayedRoutes as route, index (route.route)}
			{@const active = $page.url.pathname.indexOf(route.route) > 0}
			{@const last = displayedRoutes.length - 1 === index}
			<li style:flex-grow={last && '1'}>
				<a sveltekit:prefetch href="/{route.route}" class:active aria-current={(active && 'page') || undefined}>
					<span>
						{route.label}
					</span>
				</a>
			</li>
		{/each}
		{#if !$session}
			<li>
				<a
					href="/utilisateur/creer-son-compte"
					class:active={isCreateAccountActive}
					aria-current={(isCreateAccountActive && 'page') || undefined}
				>
					<span> S'inscrire </span>
				</a>
			</li>
			<li style:margin-right="12px">
				<a
					class="button"
					href="/utilisateur/se-connecter"
					aria-current={(isLoginActive && 'page') || undefined}
				>
					<span> Se connecter </span>
				</a>
			</li>
		{:else}
			<li>
				<a class="button" href="/utilisateur/espace-client">
					<span> {$session.association.name} </span>
				</a>
			</li>
			<li>
				<a href="/utilisateur/se-deconnecter">
					<span> Se déconnecter </span>
				</a>
			</li>
		{/if}
	</ul>
</nav>

<style>
	nav {
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		height: var(--header-height);
		background-color: var(--main-color);
		color: white;
	}

	nav ul {
		height: 100%;
		margin: 0;
		padding: 0;
		list-style: none;

		display: flex;
		align-items: stretch;
	}

	li:not(:first-child) a {
		padding: 0 16px;
	}

	a {
		font-size: 16px;
		height: var(--header-height);
		line-height: var(--header-height);
		font-weight: 300;
		display: inline-block;
		user-select: none;

		text-decoration: none;
		color: white;

		position: relative;
		top: 0;
		transition: color 0.2s;
		border-radius: 8px;
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

	.active span {
		border-bottom: 2px solid var(--secondary-color);
		padding: 4px 0;
	}

	a:not(.active):hover {
		color: var(--secondary-color);
	}
	a.button:not(.active):hover span {
		border-color: var(--secondary-color);
	}

	:focus-visible {
		outline: 2px solid white;
		outline-offset: -4px;
	}
</style>
