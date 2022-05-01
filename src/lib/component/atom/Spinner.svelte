<script>
	export let size = 32;
</script>

<div style:--spinner-size={`${size}px`} />

<style>
	div {
		margin: 0 auto;
		position: relative;
		width: var(--spinner-size);
		height: var(--spinner-size);
		border-radius: 50%;
		border: 2px solid;
		border-color: transparent currentColor;
		animation: rotation 0.5s linear infinite;
	}
	@keyframes rotation {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
