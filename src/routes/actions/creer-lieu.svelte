<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$lib/utils/form';
	import AddressAutocomplete from '$lib/component/input/AddressAutocomplete.svelte';

	export let error: string | undefined = undefined;

	let pending = false;
</script>

<form
	action="/actions/creer-lieu"
	method="post"
	use:enhance={{
		pending: () => {
			pending = true;
		},
		result: async () => {
			goto('/recherche/liste'); //FIXME
		},
		error: async (p) => {
			const body = await p.response.json();
			error = body?.error;
			pending = false;
		}
	}}
>
	<h1>Ajouter un nouveau lieu</h1>

	<p>Si l’un de vos lieux de pratique n’apparait pas dans la liste, veuillez l’ajouter.</p>

	<label>
		Nom du lieu
		<input
			name="name"
			placeholder="Ex : Gymnase Les Chalais, Skatepark de La Poterie, Salle Belle-Ile..."
		/>
	</label>

	<AddressAutocomplete />

	<div>
		<button type="submit" disabled={pending}>Enregistrer le lieu</button>
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
		max-width: 550px;
	}

	h1 {
		color: var(--secondary-color);
		text-shadow: 0 3px 3px #ccc;
	}

	h1,
	p,
	label {
		text-align: center;
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

	:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>
