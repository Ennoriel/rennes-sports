<script lang="ts">
	export let duration = '400ms';
	export let offset = 0;
	export let tolerance = 15;
	export let zIndex = 0;

	export let pin = true;

	let y = 0;
	let lastY = 0;

	function deriveClass(y = 0, scrolled = 0) {
		if (y < offset) return true;
		if (!scrolled || Math.abs(scrolled) < tolerance) return pin;
		return scrolled >= 0;
	}

	function updateClass(y = 0) {
		const scrolledPxs = lastY - y;
		lastY = y;
		return deriveClass(y, scrolledPxs);
	}

	$: {
		pin = updateClass(y);
	}
</script>

<svelte:window bind:scrollY={y} />
<div class:pin style:transition-duration={duration} style:z-index={zIndex}>
	<slot />
</div>

<style>
	div {
		position: fixed;
		width: 100%;
		top: 0;
		transition: transform 300ms;

		transform: translateY(-100%);
	}
	.pin {
		transform: translateY(0%);
	}
</style>
