<script lang="ts">
	import { fromObj } from 'form-data-to-object';

	export let name: string;
	export let value: Record<string, any> | string;
</script>

{#if name && value}
	{#each Object.entries(fromObj({ [name]: value })) as [key, v]}
		<input type="hidden" name={key} value={v} />
	{/each}
{/if}
