/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface Locals {
		session?: {
			_id: string;
			email: string;
			role: string;
			name: string;
			website: string;
			iat: number;
		};
	}

	interface Session {
		association: {
			email: string;
			role: string;
			name: string;
			website: string;
		};
	}
}
