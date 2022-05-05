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

	export let error;

	let pending = false;
</script>

<form
	action="/utilisateur/se-connecter"
	method="post"
	use:enhance={{
		pending: () => {
			pending = true;
		},
		result: async ({ response }) => {
			$session = await response.json();
			goto('/recherche/liste');
		},
		error: async (p) => {
			const body = await p.response.json();
			error = body?.error;
			pending = false;
		}
	}}
>
	<h1>Connexion</h1>
	<p>Connectez-vous à votre compte.</p>
	<p>
		Vous n'en avez pas encore ?
		<br />
		<a class="log-on" href="/utilisateur/creer-son-compte"> Inscrivez-vous ! </a>
	</p>
	<label>
		E-mail
		<input name="email" type="email" />
	</label>
	<label>
		Mot de passe
		<input name="password" type="password" />
	</label>
	{error || ''}
	<div>
		<button type="submit" disabled={pending}>Se connecter</button>
	</div>
	<div>
		<a class="forgot-pwd" href="/utilisateur/mot-de-passe-oublie"> Mot de passe oublié ? </a>
	</div>
</form>

<style>
	form,
	label {
		display: flex;
		flex-direction: column;
	}

	form {
		margin: 0 auto;
		padding: 48px 24px 0;
		max-width: 350px;
	}

	h1,
	p,
	label,
	a {
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
	}

	input[type='text'],
	input[type='email'],
	input[type='password'] {
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

	button[type='submit'] {
		height: 42px;
		border-radius: 21px;
		border: none;
		background-color: var(--main-color);
		color: white;
		padding: 0 24px;
		margin: 8px;
	}

	button[disabled] {
		background: #eee;
		color: black;
		cursor: default;
	}

	a.forgot-pwd {
		font-weight: 100;
	}

	:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>
