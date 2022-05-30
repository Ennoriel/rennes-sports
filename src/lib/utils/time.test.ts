import * as _ from './time';

describe('number utils', () => {
	it('all methods are tested', () => {
		// TODO some are missing
		expect(Object.keys(_).length).toStrictEqual(6);
	});

	it('getDayOrder', () => {
		expect(_.getDayOrder('Lundi')).toStrictEqual(0);
		expect(_.getDayOrder('Mardi')).toStrictEqual(1);
		expect(_.getDayOrder('Mercredi')).toStrictEqual(2);
		expect(_.getDayOrder('Jeudi')).toStrictEqual(3);
		expect(_.getDayOrder('Vendredi')).toStrictEqual(4);
		expect(_.getDayOrder('Samedi')).toStrictEqual(5);
		expect(_.getDayOrder('Dimanche')).toStrictEqual(6);
		expect(_.getDayOrder('Sunday')).toStrictEqual(-1);
		expect(_.getDayOrder(undefined)).toStrictEqual(7);
	});
});
