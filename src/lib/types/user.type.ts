export type Role = 'admin' | 'user';

export type User = {
	_id: string;
	email: string;
	association: string;
	role: Role;
};
