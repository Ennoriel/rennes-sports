<script lang="ts">
    export let variant: 'primary' | 'secondary' = 'primary';
    export let type = "button";
</script>

<button
    {type}
    on:click
    class={variant}
>
    <slot/>
</button>

<style>
    button {
        flex-grow: 1;
        background-color: #eeeeee;
        border-radius: 5px;
        padding: 8px 16px;
        cursor: pointer;
        border: none;
        color: #c4c4c4;
        transition: all .4s;
    }

    .primary {
        background-color: var(--main-color);
        color: white;
        border: 1px solid #eeeeee;
        flex-grow: 3;
    }

    .primary:hover {
        background-color: #eeeeee;
        color: black;
        border: 1px solid var(--main-color);
    }

    .secondary:hover {
        background-color: var(--main-color);
        color: white;
    }
</style>