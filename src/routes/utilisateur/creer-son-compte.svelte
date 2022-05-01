<script context="module" lang="ts">
	import { parseUrlSearchParams } from '$lib/utils/query';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async (input) => {
		if (input.session) return { status: 302, redirect: '/' };

		return parseUrlSearchParams(input);
	};
</script>

<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$lib/utils/form';
	import { session } from '$app/stores';
	import Button from '$lib/component/atom/Button.svelte';

	export let error;

	let password;
	let showPassword = false;
</script>

<form
	action="/utilisateur/creer-son-compte"
	method="post"
	use:enhance={{
		result: async ({ response }) => {
			$session = await response.json();
			goto('/utilisateur/se-connecter');
		},
		error: async (p) => {
			const body = await p.response.json();
			error = body?.error;
		}
	}}
>
	<h1>
		Inscription
	</h1>
	<p>
		Créez un compte pour votre <strong>association</strong> afin de pouvoir répertorier tous vos créneaux.
	</p>
	<p>
		Vous avez déjà un compte ?
		<br/>
		<a class="log-on" href="/utilisateur/se-connecter">
			Connectez-vous !
		</a>
	</p>
	<label>
		E-mail
		<input name="email" type="email" />
	</label>
	<label>
		Mot de passe
		{#if showPassword}
			<input name="password" type="text" bind:value={password} />
			<button type="button" on:click={() => (showPassword = false)}>
				<img src="/svg/eye-strike.svg" alt="cacher" />
			</button>
		{:else}
			<input name="password" type="password" bind:value={password} />
			<button type="button" on:click={() => (showPassword = true)}>
				<img src="/svg/eye.svg" alt="cacher" />
			</button>
		{/if}
	</label>
	<label>
		Nom de votre association
		<input name="association" type="text" />
	</label>
	<label>
		Lien vers votre site internet / réseau social
		<input name="website" type="text" />
	</label>
	<label>
		<input name="cgu" type="checkbox" required />
		J'accepte les <a href="/cgu">conditions générales d'utilisation</a>
	</label>
	{error || ''}
	<button type="submit">S'inscrire</button>
</form>

<style>
	form, label {
		display: flex;
		flex-direction: column;
	}

	form {
		margin: 0 auto;
		padding: 48px 24px 0;
		max-width: 350px;
	}

	h1, p, label, a {
		text-align: center;
	}

	h1 {
		color: var(--main-color);
		margin-bottom: 32px;
	}

	a.log-on {
		color: var(--main-color);
	}

	p {
		margin-bottom: 8px;
		line-height: 1.2;
	}

	label {
		margin-bottom: 16px;
		font-weight: 100;
		position: relative;
	}

	label button {
		border: none;
		background-color: transparent;
		position: absolute;
		bottom: 10.5px;
		right: 15px;
	}

	label button, label button img {
		width: 20px;
		height: 20px;
		border-radius: 10px;
	}

	input[type="text"], input[type="email"], input[type="password"] {
		height: 42px;
		border-radius: 21px;
		border: none;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
		padding: 0 16px;
		color: var(--main-color);
		text-align: center;
		margin-top: 6px;
	}

	div {
		text-align: center;
	}

	button[type="submit"] {
		height: 42px;
		border-radius: 21px;
		border: none;
		background-color: var(--main-color);
		color: white;
		padding: 0 24px;
		margin: 8px;
		margin-bottom: 48px;
	}

	a.forgot-pwd {
		font-weight: 100;
	}

	:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>