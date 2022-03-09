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
</script>

<form
	action="/utilisateur/connexion"
	method="post"
	use:enhance={{
		result: async ({ response }) => {
			$session = await response.json();
			goto('/recherche/liste');
		},
		error: async (p) => {
			const body = await p.response.json();
			error = body?.error;
		}
	}}
>
	<label>
		Adresse email
		<input name="email" type="email" />
	</label>
	<label>
		Mot de passe
		<input name="password" type="password" />
	</label>
	{error || ''}
	<button type="submit">Login</button>
	<p>Vous n'avez pas encore de compte ? <a href="/accounts/register">Créez-en un !</a></p>
	<p>
		Pour l'instant, vous pouvez vous connecter avec n'importe quelle addresse email (donnée non
		enregistrée) et un mot de passe non vide.
	</p>
</form>
