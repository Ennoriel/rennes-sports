<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (!session || !Object.keys(session).length)
			return { status: 302, redirect: '/utilisateur/connexion' };
		return {};
	};
</script>

X
