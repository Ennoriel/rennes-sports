import bcrypt from 'bcrypt';

export function crypt(password: string, saltRounds = 12): string {
	const salt = bcrypt.genSaltSync(saltRounds);
	return bcrypt.hashSync(password, salt);
}

export function validate(password: string, hash: string): boolean {
	return bcrypt.compareSync(password, hash);
}
