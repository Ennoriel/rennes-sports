<script lang="ts">
	export let label: string;
	export let name: string;
	export let required = false;
	export let placeholder: string | undefined = undefined;
	export let value = '';
	export let variant: 'square' | 'rounded' = 'rounded';
</script>

<label class="input" class:square={variant === 'square'} class:rounded={variant === 'rounded'}>
	{label}
	<input type="text" {name} {required} bind:value {placeholder} />
</label>
