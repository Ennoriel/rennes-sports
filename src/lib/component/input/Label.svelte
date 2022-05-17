<script lang="ts">
	export let variant: 'square' | 'rounded' = 'rounded';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
	class="input"
	class:square={variant === 'square'}
	class:rounded={variant === 'rounded'}
	{...$$restProps}
>
	<slot />
</label>
