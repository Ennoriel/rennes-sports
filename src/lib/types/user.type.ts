export type User = {
	_id: string;
	email: string;
	association: string;
	role: 'user' | 'admin';
};
