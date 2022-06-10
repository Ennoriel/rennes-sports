<script lang="ts">
	import Button from '../atom/Button.svelte';
	import EyeOff from '../svg/EyeOff.svelte';
	import Eye from '../svg/Eye.svelte';
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
		<Button
			type="button"
			theme="transparent"
			icon={EyeOff}
			size="s"
			on:click={changePasswordVisibility}
		/>
	{:else}
		<input type="password" {name} bind:value={password} bind:this={input} />
		<Button
			type="button"
			theme="transparent"
			icon={Eye}
			size="s"
			on:click={changePasswordVisibility}
		/>
	{/if}
</label>

<style>
	label {
		position: relative;
	}

	label :global(button) {
		position: absolute;
		bottom: 4.5px;
		right: 4.5px;
	}
</style>
