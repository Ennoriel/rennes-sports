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
        border-radius: 5px;
        padding: 8px 16px;
        cursor: pointer;
        border: none;
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

    .secondary {
        background-color: #eeeeee;
        color: #4F4F4F;
    }

    .secondary:hover {
        background-color: var(--main-color);
        color: white;
    }
</style>