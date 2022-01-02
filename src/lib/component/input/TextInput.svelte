<script lang="ts">
    export let label;
    export let placeholder = label;
    export let value;
</script>

<label>
    {label}
    <input
        type="text"
        bind:value
        {placeholder}
    />
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        font-size: 17px;
        font-weight: 500;
        gap: 10px;
        margin-top: 20px;
    }
    input {
        outline: none;
        margin: 0;
        border: 1px solid #e3e3e3;
        height: 33px;
        border-radius: 5px;
        padding: 0 0 0 10px;
        transition: all 0.2s;
    }
</style>
