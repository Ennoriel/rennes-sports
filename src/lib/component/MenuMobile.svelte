<script lang="ts">
	import { fly } from 'svelte/transition';
	import { getHost } from '$lib/utils/static.util';
	import { state } from '../store/state';
	import { routes } from '$lib/data/routes';
	import { page } from '$app/stores';
	import XOrMenu from '$lib/component/svg/XOrMenu.svelte';

	let search;
	let isOpen = false;

	export let filtrable = true;
</script>

<nav>
	<span id="menu-bar">
		<a href="{getHost()}/" class="icon">
			<img
				src="{getHost()}/svg/icon.svg"
				alt="Icone de l'application permettant de revenir à l'accueil"
			/>
		</a>
		{#if filtrable}
			<input bind:value={search} aria-label="Recherche globale" placeholder="Ski nautique" />
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
		{/if}
		<button
			class="menu"
			on:click={() => {
				$state.isOpen = false;
				isOpen = !isOpen;
			}}
		>
			<XOrMenu visible={!isOpen} />
		</button>
	</span>

	{#if isOpen}
		<ul transition:fly={{ x: -200, duration: 400 }}>
			{#each routes as route}
				<li>
					<a on:click={() => (isOpen = false)} href="{getHost()}/{route.route}">
						{#if $page.url.pathname.indexOf(route) > 0}
							>
						{/if}
						{route.label}
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
		justify-content: space-between;
		gap: 16px;

		padding: 0 10px;
		box-sizing: border-box;
		background-color: var(--main-color);

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
	}

	input {
		flex-grow: 2;
		padding: 0 16px;
		transition: all 0.2s;
		width: 50px;
		box-shadow: 0 0 4px #ddd;
	}

	input:focus-visible {
		box-shadow: 0 0 5px #eee;
	}

	button {
		cursor: pointer;
	}

	button.filters {
		background: white;
		padding: 0 16px;
	}

	button.menu {
		width: calc(var(--header-height) - 25px);
		background-color: var(--main-color);
		display: flex;
		align-items: center;
		justify-content: center;

		color: white;
	}

	button.menu img {
		width: 16px;
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
