<script lang="ts">
	import Label from './Label.svelte';

	export let label: string;
	export let name: string;
	export let required = false;
	export let placeholder: string | undefined = undefined;
	export let value = '';
	export let variant: 'square' | 'rounded' = 'rounded';
</script>

<Label {variant}>
	{label}
	<input type="text" {name} {required} bind:value {placeholder} />
</Label>
