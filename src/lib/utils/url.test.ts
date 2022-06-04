import * as _ from './url';

describe('url utils', () => {
	it('all methods are tested', () => {
		// TODO some tests are missing
		expect(Object.keys(_).length).toStrictEqual(2);
	});

	it('urlSearchParamsToString', () => {
		expect(_.urlSearchParamsToString(new URLSearchParams({ key: 'value' }))).toStrictEqual({
			key: 'value'
		});
		expect(_.urlSearchParamsToString(new URLSearchParams({ 'key[]': 'value' }))).toStrictEqual({
			'key[]': 'value'
		});
	});
});
