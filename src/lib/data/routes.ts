import Session = App.Session;

export type Route = {
	route: string;
	label: string;
	guard?: () => boolean;
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
		route: 'utilisateur/connexion',
		label: 'Connexion',
		guard: () => false
	},
	{
		route: 'utilisateur/creation-compte',
		label: 'Créer un compte',
		guard: () => false
	},
	{
		route: 'utilisateur/deconnexion',
		label: 'Se déconnecter',
		guard: () => true
	}
];

export const guard = (routes: Array<Route>, session: Session) => {
	return routes.filter(route => !route.guard || route.guard() === !!session)
}
