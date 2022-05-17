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
	import { enhance } from '$lib/utils/form';
	import { session } from '$app/stores';
	import EmailInput from '$lib/component/input/EmailInput.svelte';
	import PasswordInput from '$lib/component/input/PasswordInput.svelte';
	import TextInput from '../../lib/component/input/TextInput.svelte';
	import Button from '../../lib/component/atom/Button.svelte';

	export let error: string | null = null;
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
	<h1>Inscription</h1>
	<p>
		Créez un compte pour votre <strong>association</strong> afin de pouvoir répertorier tous vos créneaux.
	</p>
	<p>
		Vous avez déjà un compte ?
		<br />
		<a class="log-on" href="/utilisateur/se-connecter"> Connectez-vous ! </a>
	</p>
	<EmailInput />
	<PasswordInput />
	<TextInput name="name" label="Nom de votre association" />
	<TextInput name="website" label="Lien vers votre site internet / réseau social" />
	<label>
		<input name="cgu" type="checkbox" required />
		J'accepte les <a class="cgu" href="/cgu">conditions générales d'utilisation</a>
	</label>
	{error || ''}
	<Button type="submit">S'inscrire</Button>
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

	input {
		margin: auto;
	}

	a.cgu {
		color: var(--secondary-color);
	}
</style>
