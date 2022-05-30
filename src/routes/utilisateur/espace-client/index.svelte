<script lang="ts">
	import { session } from '$app/stores';
	import TextInput from '$lib/component/input/TextInput.svelte';
	import EmailInput from '$lib/component/input/EmailInput.svelte';
	import PasswordInput from '$lib/component/input/PasswordInput.svelte';
	import Button from '$lib/component/atom/Button.svelte';

	let association = $session?.association || { name: '', website: '', email: '' };
</script>

<form>
	<h1>Votre compte</h1>

	<h2>
		<span> Profil </span>
	</h2>
	<TextInput bind:value={association.name} name="name" label="Nom de votre association" />
	<TextInput
		bind:value={association.website}
		name="website"
		label="Lien vers votre site internet / réseau social"
	/>

	<h2>
		<span> Paramètre de compte </span>
	</h2>
	<EmailInput bind:value={association.email} />
	<PasswordInput label="Ancien mot de passe" />
	<PasswordInput label="Nouveau mot de passe" />

	<Button type="submit">Mettre à jour</Button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		padding: 24px 24px 0;
		max-width: 350px;
		margin-bottom: 48px;
	}

	h1,
	h2 {
		text-align: center;
		color: var(--main-color);
		margin-bottom: 16px;
	}

	h2 span {
		border-bottom: 2px solid var(--main-color);
	}
</style>
