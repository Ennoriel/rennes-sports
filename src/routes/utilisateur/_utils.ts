import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

export function crypt(password: string, saltRounds = 12): string {
	const salt = genSaltSync(saltRounds);
	return hashSync(password, salt);
}

export function validate(password: string, hash: string): boolean {
	return compareSync(password, hash);
}
