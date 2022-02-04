<script lang="ts">
	export let imgSrc;
	export let target;
	export let alt;
	export let href;
</script>

<a {target} {href}>
	{#if imgSrc}
		<img {alt} src={imgSrc} />
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
