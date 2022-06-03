<script lang="ts">
	export let label = 'Mot de passe';
	export let name = 'password';
	export let variant: 'square' | 'rounded' = 'rounded';

	let password: string;
	let showPassword = false;

	let input: HTMLInputElement;

	function changePasswordVisibility() {
		showPassword = !showPassword;
		setTimeout(() => {
			input.focus();
		}, 0);
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="input" class:square={variant === 'square'} class:rounded={variant === 'rounded'}>
	{label}
	{#if showPassword}
		<input type="text" {name} bind:value={password} bind:this={input} />
		<button type="button" on:click={changePasswordVisibility}>
			<img src="/svg/eye-strike.svg" alt="cacher" />
		</button>
	{:else}
		<input type="password" {name} bind:value={password} bind:this={input} />
		<button type="button" on:click={changePasswordVisibility}>
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
	.square button {
		bottom: 6.5px;
	}

	button,
	button img {
		width: 20px;
		height: 20px;
		border-radius: 10px;
	}

	button:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 4px;
	}
</style>
