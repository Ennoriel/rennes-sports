<script>
	import { routes } from '$lib/data/routes';
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li>
			<a href="/">
				<img class="icon" src="/svg/icon.svg" alt="icon app" />
			</a>
		</li>
		{#each routes as route}
			<li>
				<a href="/{route.route}" class:active={$page.url.pathname.indexOf(route.route) > 0}>
					<span>
						{route.label}
					</span>
				</a>
			</li>
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

	img {
		padding: 0 8px;
		height: calc(var(--header-height) - 15px);
		vertical-align: middle;
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
