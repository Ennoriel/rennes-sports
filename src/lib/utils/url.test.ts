import * as _ from './url';

describe('url utils', () => {
	it('all methods are tested', () => {
		expect(Object.keys(_).length).toStrictEqual(1);
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
