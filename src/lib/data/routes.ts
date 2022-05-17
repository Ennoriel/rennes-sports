export type Route = {
	route: string;
	label: string;
	guard?: (session: App.Session) => boolean;
	display?: (config?: { mobile: boolean }) => boolean;
};

export type Spacer = {
	spacer: true;
	display?: (config?: { mobile: boolean }) => boolean;
};

export const routes: Array<Route | Spacer> = [
	{
		route: 'utilisateur/espace-client',
		label: 'Espace asso',
		guard: (session) => !!session,
		display: (config) => config.mobile
	},
	{
		spacer: true,
		display: (config) => config.mobile
	},
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
		guard: (session) => !!session
	},
	{
		route: 'actions/creer-lieu',
		label: 'Nouveau lieu',
		guard: (session) => !!session
	},
	{
		route: 'a-propos',
		label: 'À propos'
	},
	{
		route: 'utilisateur',
		label: 'Utilisateurs',
		guard: (session) => session?.association?.role === 'admin'
	},
	{
		route: 'book',
		label: 'Book',
		guard: (session) => session?.association?.role === 'admin'
	},
	{
		spacer: true,
		display: (config) => config.mobile
	},
	{
		route: 'utilisateur/se-connecter',
		label: 'Se connecter',
		guard: (session) => !session,
		display: (config) => config.mobile
	},
	{
		route: 'utilisateur/creer-son-compte',
		label: 'Créer un compte',
		guard: (session) => !session,
		display: (config) => config.mobile
	},
	{
		route: 'utilisateur/se-deconnecter',
		label: 'Se déconnecter',
		guard: (session) => !!session,
		display: (config) => config.mobile
	}
];

export const guard = (
	routes: Array<Route | Spacer>,
	session: App.Session
): Array<Route | Spacer> => {
	return routes.filter((route) => !('guard' in route) || !route.guard || route.guard(session));
};

export const display = (
	routes: Array<Route | Spacer>,
	config: { mobile: boolean }
): Array<Route | Spacer> => {
	return routes.filter((route) => !route.display || route.display(config));
};
