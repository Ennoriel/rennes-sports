<script lang="ts">
	export let direction: 'horizontal' | 'vertical' = 'horizontal';
</script>

<div class="button-group {direction}">
	<slot />
</div>

<style>
	.vertical {
		flex-direction: column;
		align-items: center;
	}
	.button-group {
		margin-top: 10px;
		display: flex;
		gap: 10px;
		margin-bottom: 24px;
	}
</style>
