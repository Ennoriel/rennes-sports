<span class="l">
	<slot name="l" />
</span>
<span class="s">
	<slot name="s">
		<slot name="l" />
	</slot>
</span>

<style>
	.l {
		display: none;
	}
	@media (min-width: 721px) {
		.s {
			display: none;
		}
		.l {
			display: block;
		}
	}
</style>
