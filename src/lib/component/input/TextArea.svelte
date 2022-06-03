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
	<textarea {name} {required} bind:value {placeholder} />
</Label>

<style>
	textarea {
		resize: vertical;
		height: 96px !important;
		line-height: 18px;
		font-weight: 400;
		padding-top: 8px !important;
		cursor: text;
	}
</style>
