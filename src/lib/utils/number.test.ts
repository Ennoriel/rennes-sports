import * as _ from './number';

describe('number utils', () => {
	it('all methods are tested', () => {
		expect(Object.keys(_).length).toStrictEqual(2);
	});

	it('isStringANumber', () => {
		expect(_.isStringANumber('AZER')).toBeFalsy();
		expect(_.isStringANumber('un')).toBeFalsy();
		expect(_.isStringANumber('one')).toBeFalsy();
		expect(_.isStringANumber('1.a')).toBeFalsy();
		expect(_.isStringANumber('a.1')).toBeFalsy();

		expect(_.isStringANumber('1')).toBeTruthy();
		expect(_.isStringANumber('1.2')).toBeTruthy();

		expect(_.isStringANumber('1,2')).toBeFalsy();
	});

	it('floor', () => {
		expect(_.floor(1.123456789, 0)).toStrictEqual(1);
		expect(_.floor(1.123456789, 1)).toStrictEqual(1.1);
		expect(_.floor(1.123456789, 2)).toStrictEqual(1.12);
		expect(_.floor(1.123456789, 3)).toStrictEqual(1.123);
		expect(_.floor(1.123456789, 4)).toStrictEqual(1.1234);
	});
});
