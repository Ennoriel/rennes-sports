import type { Load } from '@sveltejs/kit';

export type Route = {
	route: string;
	label: string;
	guard?: (session: App.Session) => boolean;
};

export const routes: Array<Route> = [
	{
		route: 'recherche/liste',
		label: 'Liste'
	},
	{
		route: 'recherche/carte',
		label: 'Carte'
	},
	{
		route: 'actions/nouveau',
		label: 'Nouveau',
		guard: () => true
	},
	{
		route: 'a-propos',
		label: 'A propos'
	},
	{
		route: 'utilisateur',
		label: 'Utilisateurs',
		guard: (session) => session?.user?.role === 'admin'
	},
	{
		route: 'utilisateur/connexion',
		label: 'Connexion',
		guard: (session) => !session
	},
	{
		route: 'utilisateur/creation-compte',
		label: 'Créer un compte',
		guard: (session) => !session
	},
	{
		route: 'utilisateur/deconnexion',
		label: 'Se déconnecter',
		guard: (session) => !!session
	}
];

export const guard = (routes: Array<Route>, session: App.Session): Array<Route> => {
	return routes.filter((route) => !route.guard || route.guard(session));
};

export const loadAdminGuard: Load = async ({ session }) => {
	if (!session?.user) {
		return {
			status: 302,
			redirect: '/'
		};
	}

	return {
		props: {
			user: session.user
		}
	};
};
