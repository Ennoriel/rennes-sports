<script>
	import { routes } from '$lib/data/routes';
	import { page } from '$app/stores';
	import Fav from '$lib/component/Fav.svelte';

	import { session } from '$app/stores';
</script>

<nav>
	<ul>
		<li>
			<Fav />
		</li>
		{#each routes as route}
			{@const active = $page.url.pathname.indexOf(route.route) > 0}
			{#if !route.guard || route.guard() === !!$session}
				<li>
					<a href="/{route.route}" class:active aria-current={(active && 'page') || undefined}>
						<span>
							{route.label}
						</span>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	nav {
		font-size: 16px;

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

	a {
		height: var(--header-height);
		line-height: var(--header-height);
		display: block;
		user-select: none;
	}

	li:not(:first-child) a {
		padding: 0 16px;
	}

	a {
		text-decoration: none;
		color: inherit;

		position: relative;
		top: 0;
		transition: top ease 0.4s;
	}

	.active {
		cursor: default;
	}

	.active span {
		border-bottom: 2px solid var(--secondary-color);
		padding: 4px 0;
	}

	a:not(.active):hover {
		top: -4px;
	}

	a:focus-visible {
		outline: 2px solid var(--secondary-color);
		outline-offset: -4px;
	}
</style>
