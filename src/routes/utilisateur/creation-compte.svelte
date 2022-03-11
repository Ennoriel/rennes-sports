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
	action="/utilisateur/creation-compte"
	method="post"
	use:enhance={{
		result: async ({ response }) => {
			$session = await response.json();
			goto('/utilisateur/connexion');
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
		{#if showPassword}
			<input name="password" type="text" bind:value={password} />
			<Button type="button" on:click={() => (showPassword = false)}>Cacher le mot de passe</Button>
		{:else}
			<input name="password" type="password" bind:value={password} />
			<Button type="button" on:click={() => (showPassword = true)}>Montrer le mot de passe</Button>
		{/if}
	</label>
	<label>
		Association
		<input name="association" type="text" />
	</label>
	{error || ''}
	<button type="submit">S'inscrire</button>
	<p>Vous inscrire permet de créer des créneaux sportifs pour votre association.</p>
</form>
