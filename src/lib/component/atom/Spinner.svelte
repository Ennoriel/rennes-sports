<div />

<style>
	div {
		margin: 0 auto;
		position: relative;
		width: var(--spinner-size, 32px);
		height: var(--spinner-size, 32px);
		border-radius: 50%;
		border: var(--spinner-width, 2px) solid;
		border-color: transparent transparent var(--spinner-color, var(--main-color));
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
	@media (prefers-reduced-motion) {
		div {
			animation: none;
			border: none;
			width: 100px;
		}
		div:after {
			content: 'chargement...';
		}
	}
</style>
