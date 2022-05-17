<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$lib/utils/form';
	import AddressAutocomplete from '$lib/component/input/AddressAutocomplete.svelte';
	import TextInput from '../../lib/component/input/TextInput.svelte';
	import Button from '../../lib/component/atom/Button.svelte';

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
			goto('/recherche/liste');
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

	<TextInput
		name="name"
		label="Nom du lieu"
		placeholder="Ex : Gymnase Les Chalais, Skatepark de La Poterie, Salle Belle-Ile..."
	/>
	<AddressAutocomplete />

	<div>
		<Button type="submit" disabled={pending}>Enregistrer le lieu</Button>
	</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		padding: 48px 24px 0;
		max-width: 550px;
	}

	h1 {
		color: var(--secondary-color);
		text-shadow: 0 3px 3px #ccc;
	}

	h1,
	p {
		text-align: center;
	}

	p {
		margin-bottom: 8px;
		line-height: 1.2;
	}

	div {
		text-align: center;
	}
</style>
