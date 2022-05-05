<script lang="ts">
    export let label = "Mot de passe";
    export let name: string;

    let password: string;
    let showPassword = false;
</script>

<label>
    {label}
    {#if showPassword}
        <input type="text" {name} bind:value={password} />
        <button type="button" on:click={() => (showPassword = false)}>
            <img src="/svg/eye-strike.svg" alt="cacher" />
        </button>
    {:else}
        <input type="password" {name} bind:value={password} />
        <button type="button" on:click={() => (showPassword = true)}>
            <img src="/svg/eye.svg" alt="cacher" />
        </button>
    {/if}
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 16px;
        font-weight: 100;
        position: relative;
    }

    input {
        height: 42px;
        border-radius: 21px;
        border: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        padding: 0 16px;
        color: var(--main-color);
        text-align: center;
        margin-top: 6px;
    }

    :focus-visible {
        outline: 2px solid var(--focus-color);
        outline-offset: 2px;
    }

    button {
        border: none;
        background-color: transparent;
        position: absolute;
        bottom: 10.5px;
        right: 15px;
    }

    button,
    button img {
        width: 20px;
        height: 20px;
        border-radius: 10px;
    }
</style>