<script lang="ts">
	import { fromObj } from 'form-data-to-object';

	export let name: string;
	export let value: Record<string, any> | string | number | boolean;

	$: _value = Object.entries(fromObj(name === '$' ? value || {} : { [name]: value }) || {});
</script>

{#if _value}
	{#each _value as [key, v]}
		<input type="hidden" name={key} value={v} />
	{/each}
{/if}
