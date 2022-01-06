<script>
	import { getHost } from '$lib/utils/static.util';
	import { routes } from '$lib/routes/search';
	import { capitalize } from '$lib/utils/string.util';
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li>
			<a href="{getHost()}/">
				<img class="icon" src="{getHost()}/svg/icon.svg" alt="icon app" />
			</a>
		</li>
		{#each routes as route}
			<li>
				<a href="{getHost()}/recherche/{route}">
					<span class:active={$page.path.indexOf(route) > 0}>
						{capitalize(route)}
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
		transition: top ease 0.5s;
	}

	.active {
		border-bottom: 2px solid var(--secondary-color);
		padding: 4px 0;
	}

	a:hover {
		top: -4px;
	}

	a:focus-visible {
		outline: 2px solid var(--secondary-color);
		outline-offset: -4px;
	}
</style>
