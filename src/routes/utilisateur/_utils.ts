import bcryptjs from 'bcryptjs';

export function crypt(password: string, saltRounds = 12): string {
	const salt = bcryptjs.genSaltSync(saltRounds);
	return bcryptjs.hashSync(password, salt);
}

export function validate(password: string, hash: string): boolean {
	return bcryptjs.compareSync(password, hash);
}
