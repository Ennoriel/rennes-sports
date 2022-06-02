import * as _ from './query';

describe('query utils', () => {
	it('all methods are tested', () => {
		// TODO some are missing
		expect(Object.keys(_).length).toStrictEqual(3);
	});

	it('errorResponse', () => {
		expect(_.errorResponse(true, 'please check dev.machyme.fr', 418)).toStrictEqual({
			status: 418,
			body: { error: 'please check dev.machyme.fr' }
		});
		expect(_.errorResponse(false, 'please check dev.machyme.fr', 418, '/home')).toStrictEqual({
			status: 302,
			headers: { Location: `/home?error=please check dev.machyme.fr` }
		});
	});
});
