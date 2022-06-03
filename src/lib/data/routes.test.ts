import * as _ from './routes';
import { ROUTE, SESSION } from './test';

describe('routes utils', () => {
	it('all methods are tested', () => {
		expect(Object.keys(_).length).toStrictEqual(8 + 1);
	});

	it('loggedGuard', () => {
		expect(_.loggedGuard(SESSION.NOT_LOGGED)).toBeFalsy();
		expect(_.loggedGuard(SESSION.LOGGED)).toBeTruthy();
		expect(_.loggedGuard(SESSION.ADMIN)).toBeTruthy();
	});

	it('notLoggedGuard', () => {
		expect(_.notLoggedGuard(SESSION.NOT_LOGGED)).toBeTruthy();
		expect(_.notLoggedGuard(SESSION.LOGGED)).toBeFalsy();
		expect(_.notLoggedGuard(SESSION.ADMIN)).toBeFalsy();
	});

	it('adminGuard', () => {
		expect(_.adminGuard(SESSION.NOT_LOGGED)).toBeFalsy();
		expect(_.adminGuard(SESSION.LOGGED)).toBeFalsy();
		expect(_.adminGuard(SESSION.ADMIN)).toBeTruthy();
	});

	it('guard', () => {
		const ROUTES = [ROUTE.ALL, ROUTE.NOT_LOGGED, ROUTE.LOGGED, ROUTE.ADMIN];

		expect(_.guard(ROUTES, SESSION.NOT_LOGGED)).toHaveLength(2);
		expect(_.guard(ROUTES, SESSION.NOT_LOGGED)).toStrictEqual([ROUTE.ALL, ROUTE.NOT_LOGGED]);

		expect(_.guard(ROUTES, SESSION.LOGGED)).toHaveLength(2);
		expect(_.guard(ROUTES, SESSION.LOGGED)).toStrictEqual([ROUTE.ALL, ROUTE.LOGGED]);

		expect(_.guard(ROUTES, SESSION.ADMIN)).toHaveLength(3);
		expect(_.guard(ROUTES, SESSION.ADMIN)).toStrictEqual([ROUTE.ALL, ROUTE.LOGGED, ROUTE.ADMIN]);
	});

	it('display', () => {
		const ROUTES = [ROUTE.ALL, ROUTE.SPACER, ROUTE.SPACER_MOBILE];

		expect(_.display(ROUTES, { mobile: true })).toHaveLength(3);
		expect(_.display(ROUTES, { mobile: true })).toStrictEqual(ROUTES);
		expect(_.display(ROUTES, { mobile: false })).toHaveLength(2);
		expect(_.display(ROUTES, { mobile: false })).toStrictEqual([ROUTE.ALL, ROUTE.SPACER]);
	});

	it('getOnlyRoutes', () => {
		const ROUTES = [ROUTE.ALL, ROUTE.SPACER];

		expect(_.getOnlyRoutes(ROUTES)).toHaveLength(1);
		expect(_.getOnlyRoutes(ROUTES)).toStrictEqual([ROUTE.ALL]);
	});

	it('getActiveRoute', () => {
		const ROUTES = [ROUTE.ALL, ROUTE.FIRST_LEVEL, ROUTE.WITH_QUERY];

		expect(_.getActiveRoute('/', ROUTES)).toStrictEqual(ROUTE.ALL);
		expect(_.getActiveRoute('/first', ROUTES)).toStrictEqual(ROUTE.FIRST_LEVEL);
		expect(_.getActiveRoute('/first/first', ROUTES)).toStrictEqual(ROUTE.FIRST_LEVEL);
		expect(_.getActiveRoute('/first/second', ROUTES)).toStrictEqual(ROUTE.FIRST_LEVEL);
		expect(_.getActiveRoute('/first?q=my', ROUTES)).toStrictEqual(ROUTE.WITH_QUERY);
		expect(_.getActiveRoute('/first?q=my&other=other', ROUTES)).toStrictEqual(ROUTE.WITH_QUERY);
		expect(_.getActiveRoute('/first?q=one', ROUTES)).toStrictEqual(ROUTE.WITH_QUERY);
		expect(_.getActiveRoute('/first?q=one&other=other', ROUTES)).toStrictEqual(ROUTE.WITH_QUERY);
	});

	it('getRouteLabel', () => {
		expect(_.getRouteLabel(ROUTE.SPACER, SESSION.LOGGED)).toStrictEqual(undefined);
		expect(_.getRouteLabel(ROUTE.ALL, SESSION.LOGGED)).toStrictEqual('R_ALL');
		expect(_.getRouteLabel(ROUTE.GET_LABEL, SESSION.LOGGED)).toStrictEqual('LOGGED');
	});
});
