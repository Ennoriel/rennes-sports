<script>
	import { getHost } from '$lib/utils/static.util';
</script>

<nav>
	<ul>
		<li>
			<a href="{getHost()}/">
				<img src="{getHost()}/svg/icon.svg" alt="icon app" />
			</a>
		</li>
		<li>
			<a href="{getHost()}/sports"> Liste </a>
		</li>
		<li>
			<a href="{getHost()}/carte"> Carte </a>
		</li>
	</ul>
</nav>

<style>
	nav {
		font-size: 16px;

		width: calc(100vw - 240px);
		padding: 0 120px;
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
		gap: 32px;
	}

	nav ul a {
		height: var(--header-height);
		line-height: var(--header-height);
		display: block;
	}

	nav ul a img {
		padding: calc((var(--header-height) - 64px) / 2);
	}

	nav ul li:not(:first-child) a {
		padding: 0 16px;
	}

	a {
		text-decoration: none;
		color: inherit;

		position: relative;
		top: 0;
		transition: top ease 0.5s;
	}

	a:hover {
		top: -2px;
	}

	nav ul a:hover {
		top: -4px;
	}
</style>
