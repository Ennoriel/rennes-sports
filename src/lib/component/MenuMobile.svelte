<script lang="ts">
	import { fly } from 'svelte/transition';
	import { getHost } from '$lib/utils/static.util';
	import { state } from '../store/state';
	import { routes } from '$lib/routes/search';
	import { capitalize } from '$lib/utils/string.util';
	import { page } from '$app/stores';

	let search;
	let isOpen = false;
</script>

<nav>
	<span id="menu-bar">
		<a href="{getHost()}/" class="icon">
			<img src="{getHost()}/svg/icon.svg" alt="Icone de l'application permettant de revenir à l'accueil" />
		</a>
		<input
			bind:value={search}
			aria-label="Recherche globale"
			placeholder="Ski nautique"
		/>
		<button
			class="filters"
			on:click={(e) => {
				$state.isOpen = !$state.isOpen;
				isOpen = false;
				e.stopPropagation();
			}}
		>
			Filtrer
		</button>
		<button
			class="menu"
			on:click={() => {
				$state.isOpen = false;
				isOpen = !isOpen;
			}}
		>
			<img alt="menu" src="{getHost()}/svg/menu.svg" />
		</button>
	</span>

	{#if isOpen}
		<ul transition:fly={{ y: -50, duration: 200 }}>
			{#each routes as route}
				<li>
					<a on:click={() => (isOpen = false)} href="{getHost()}/recherche/{route}">
						{#if $page.path.indexOf(route) > 0}
							>
						{/if}
						{capitalize(route)}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

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
		gap: 16px;

		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		background-color: var(--main-color);

		position: absolute;
		z-index: 1002;
	}

	.icon,
	.icon img {
		height: calc(var(--header-height) - 15px);
	}

	input,
	button {
		height: calc(var(--header-height) - 25px);
		border-radius: calc((var(--header-height) - 25px) / 2);
		border: none;
		box-shadow: 0 0 4px #ddd;
	}

	input {
		flex-grow: 2;
		padding: 0 16px;
		transition: all 0.2s;
		width: 50px;
	}

	input:focus {
		box-shadow: 0 0 5px #eee;
	}

	button {
		background: white;
		cursor: pointer;
	}

	button.filters {
		padding: 0 16px;
	}

	button.menu {
		width: calc(var(--header-height) - 25px);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button.menu img {
		width: 16px;
	}

	ul {
		position: absolute;
		top: var(--header-height);
		width: 100%;
		box-sizing: border-box;
		left: 0;
		z-index: 1001;
		background-color: #1033a5;
		margin: 0;
		padding: 16px 48px;
		list-style: none;
	}

	ul a {
		display: block;
		text-decoration: none;
		color: inherit;
		font-size: 16px;
		line-height: 32px;

		transition: all 0.4s;
	}

	ul a:hover {
		margin-left: 8px;
	}
</style>
