<script lang="ts">
	export let imgSrc;
	export let target;
	export let alt;
	export let href;
</script>

<a {target} {href}>
	<img {alt} src={imgSrc} />
	<slot />
</a>

<style>
	a {
		display: block;
		text-align: center;
		line-height: 17px;
		color: black;
		text-decoration: none;
		outline: none;
		cursor: pointer;
		transition: all 0.1s;
	}
	a:hover,
	a:focus {
		color: var(--secondary-color);
	}
</style>
