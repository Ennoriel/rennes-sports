<script>
    import fdto from 'form-data-to-object';

    export let name;
    export let value;
</script>

{#if name && value}
    {#each Object.entries(fdto.fromObj({[name]: value})) as [key, v]}
        <input type="hidden" name={key} value={v} />
    {/each}
{/if}