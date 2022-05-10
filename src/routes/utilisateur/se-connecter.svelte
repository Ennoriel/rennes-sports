<script context="module" lang="ts">
	import { parseUrlSearchParams } from '$lib/utils/query';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async (input) => {
		if (input.session) return { status: 302, redirect: '/' };

		return parseUrlSearchParams(input);
	};
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { enhance } from '$lib/utils/form';
	import EmailInput from '$lib/component/input/EmailInput.svelte';
	import PasswordInput from '$lib/component/input/PasswordInput.svelte';

	export let error: string | null = null;

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
	<EmailInput />
	<PasswordInput />
	{error || ''}
	<div>
		<button type="submit" disabled={pending}>Se connecter</button>
	</div>
	<div>
		<a class="forgot-pwd" href="/utilisateur/mot-de-passe-oublie"> Mot de passe oublié ? </a>
	</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		padding: 48px 24px 0;
		max-width: 350px;
	}

	h1,
	p,
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
</style>
