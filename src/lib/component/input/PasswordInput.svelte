<script lang="ts">
	export let label = 'Mot de passe';
	export let name = 'password';
	export let variant: 'square' | 'rounded' = 'rounded';

	let password: string;
	let showPassword = false;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="input" class:square={variant === 'square'} class:rounded={variant === 'rounded'}>
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
		position: relative;
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
