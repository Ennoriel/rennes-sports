export type Route = {
	route: string;
	label: string;
	guard?: (session: App.Session) => boolean;
	display?: (config?: { mobile: boolean }) => boolean;
	class?: string;
	subRoutes?: Array<Route>;
};

export type Spacer = {
	spacer: true;
	display?: (config?: { mobile: boolean }) => boolean;
};

export const ROUTES: Array<Route | Spacer> = [
	{
		spacer: true,
		display: (config) => config.mobile
	},
	{
		route: '/recherche/liste',
		label: 'Liste'
	},
	{
		route: '/recherche/carte',
		label: 'Carte'
	},
	{
		route: '/a-propos',
		label: 'À propos'
	},
	{
		route: '/administration/utilisateurs',
		label: 'Administration',
		guard: adminGuard,
		subRoutes: [
			{
				route: '/administration/utilisateurs',
				label: 'Utilisateurs',
				guard: adminGuard
			},
			{
				route: '/administration/book',
				label: 'Book',
				guard: adminGuard
			}
		]
	},
	{
		spacer: true
	},
	{
		route: '/utilisateur/creer-son-compte',
		label: "S'inscrire",
		guard: notLoggedGuard
	},
	{
		route: '/utilisateur/se-connecter',
		label: 'Se connecter',
		guard: notLoggedGuard,
		class: 'button'
	},
	{
		route: '/utilisateur/espace-client',
		label: 'Mon espace',
		guard: loggedGuard,
		class: 'button',
		subRoutes: [
			{
				route: '/utilisateur/espace-client',
				label: 'Espace client',
				guard: loggedGuard
			},
			{
				route: '/actions/nouveau',
				label: 'Nouveau',
				guard: loggedGuard
			},
			{
				route: '/actions/creer-lieu',
				label: 'Nouveau lieu',
				guard: loggedGuard
			}
		]
	},
	{
		spacer: true,
		display: (config) => config.mobile
	},
	{
		route: '/utilisateur/se-deconnecter',
		label: 'Se déconnecter',
		guard: loggedGuard
	}
];

export function loggedGuard(session: App.Session) {
	return !!session;
}

export function notLoggedGuard(session: App.Session) {
	return !session;
}

export function adminGuard(session: App.Session) {
	return session?.association?.role === 'admin';
}

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

export function getOnlyRoutes(routes: Array<Route | Spacer>): Array<Route> {
	return routes.filter((r) => 'route' in r) as Array<Route>;
}

export function getActiveRoute(path: string, routes = ROUTES): Route | undefined {
	return getOnlyRoutes(routes).find(
		(r) => r.route === path || (r.subRoutes && getActiveRoute(path, r.subRoutes))
	);
}
