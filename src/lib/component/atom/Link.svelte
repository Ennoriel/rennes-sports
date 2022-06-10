<script lang="ts">
	export let target: string | undefined = undefined;
	export let href: string;
	export let svg: any = undefined;
</script>

<a {target} {href}>
	{#if svg}
		<svelte:component this={svg} />
	{/if}
	<slot />
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 4px;

		line-height: 17px;
		text-decoration: none;
		outline: none;
		cursor: pointer;
		transition: all 0.1s;
	}
	a:hover,
	a:focus-visible {
		color: var(--secondary-color);
	}
</style>
