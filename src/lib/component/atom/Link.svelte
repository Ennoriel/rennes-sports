<script lang="ts">
	export let target: string | undefined = undefined;
	export let href: string;
	export let img: { src: string; alt?: string } | undefined = undefined;
</script>

<a {target} {href}>
	{#if img?.src}
		<img src={img?.src} alt={img?.alt} aria-hidden={img?.alt ? 'false' : 'true'} />
	{/if}
	<slot />
</a>

<style>
	a {
		display: block;
		text-align: center;
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
