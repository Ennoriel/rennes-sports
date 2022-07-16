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

	it('formDataToObject', () => {
		const formData = new FormData();
		formData.append('string', 'string');
		formData.append('number', '42');
		formData.append('number2', '-42.34');
		formData.append('boolean', 'true');
		formData.append('boolean2', 'false');
		formData.append('sub[object]', 'sub object');
		formData.append('arr[0]', 'arr[0]');
		formData.append('arr[1]', 'arr[1]');
		formData.append('arr[2]', 'arr[2]');
		formData.append('arr2', 'arr0');
		formData.append('arr2', 'arr1');
		formData.append('arr2', 'arr2');

		expect(_.formDataToObject(formData)).toStrictEqual({
			string: 'string',
			number: 42,
			number2: -42.34,
			boolean: true,
			boolean2: false,
			sub: { object: 'sub object' },
			arr: ['arr[0]', 'arr[1]', 'arr[2]'],
			arr2: ['arr0', 'arr1', 'arr2']
		});
	});
});
