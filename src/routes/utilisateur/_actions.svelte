<script lang="ts">
	import Button from '$lib/component/atom/Button.svelte';
	import type { User } from '$lib/types/user.type';

	export let row: User;
	export let callback;

	async function changeRole(role) {
		const response = await fetch('/utilisateur/changer-role', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id: row._id,
				role
			})
		});

		if (response.ok) {
			callback(await response.json());
		}
	}
</script>

{#if row.role === 'user'}
	<Button on:click={() => changeRole('admin')}>Administrateur ?</Button>
{:else}
	<Button on:click={() => changeRole('user')}>Utilisateur ?</Button>
{/if}
