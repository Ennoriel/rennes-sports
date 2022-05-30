<script lang="ts">
	export let label = 'E-mail';
	export let name = 'email';
	export let value = '';
	export let variant: 'square' | 'rounded' = 'rounded';
</script>

<label class="input" class:square={variant === 'square'} class:rounded={variant === 'rounded'}>
	{label}
	<input type="email" {name} bind:value />
</label>
