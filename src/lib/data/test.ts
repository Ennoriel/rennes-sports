import * as _ from './routes';

export const SESSION = {
	NOT_LOGGED: undefined,
	LOGGED: {
		association: {
			email: 'contact@machyme.fr',
			role: 'user',
			name: 'LOGGED',
			website: 'dev.machyme.fr'
		}
	},
	ADMIN: {
		association: {
			email: 'contact@machyme.fr',
			role: 'admin',
			name: 'ADMIN',
			website: 'dev.machyme.fr'
		}
	}
};

export const ROUTE = {
	ALL: {
		route: '/',
		label: 'R_ALL'
	},
	NOT_LOGGED: {
		route: '/',
		label: 'R_NOT_LOGGED',
		guard: _.notLoggedGuard
	},
	LOGGED: {
		route: '/',
		label: 'R_LOGGED',
		guard: _.loggedGuard
	},
	ADMIN: {
		route: '/',
		label: 'R_ADMIN',
		guard: _.adminGuard
	},
	SPACER: {
		spacer: true as const
	},
	SPACER_MOBILE: {
		spacer: true as const,
		display: (config: { mobile?: boolean }) => config.mobile
	},
	FIRST_LEVEL: {
		route: '/first',
		label: '1.',
		subRoutes: [
			{
				route: '/first/first',
				label: '1.1.'
			},
			{
				route: '/first/second',
				label: '1.2.'
			}
		]
	},
	GET_LABEL: {
		route: '/get/label',
		getLabel: (session?: App.Session) => session?.association?.name
	}
};
