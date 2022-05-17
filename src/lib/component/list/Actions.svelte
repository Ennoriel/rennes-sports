<script lang="ts">
	import Button from '../atom/Button.svelte';
	import type { Role, User } from '$lib/types/user.type';

	export let row: User;
	export let callback: (user: User) => void;

	async function changeRole(role: Role) {
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
	<Button variant="rounded" size="s" on:click={() => changeRole('admin')}>Administrateur ?</Button>
{:else}
	<Button variant="rounded" size="s" on:click={() => changeRole('user')}>Utilisateur ?</Button>
{/if}
