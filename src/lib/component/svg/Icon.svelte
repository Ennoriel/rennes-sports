<script lang="ts">
	export let color = 'currentColor';
	export let width = 24;
	export let height = 24;
	export let strokeWidth = 2;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 {width} {height}"
	fill="none"
	stroke-linecap="round"
	stroke-linejoin="round"
	{width}
	{height}
	stroke={color}
	stroke-width={strokeWidth}
	class="icon"
>
	<slot />
</svg>
