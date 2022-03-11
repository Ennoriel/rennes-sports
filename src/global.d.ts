/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface Locals {
		session?: {
			uid: string;
			email: string;
			role: string;
		};
	}

	interface Session {
		user: {
			email: string;
			role: string;
		};
	}
}
