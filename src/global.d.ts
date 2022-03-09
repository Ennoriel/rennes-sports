/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface Locals {
		session?: {
			uid: string;
			email: string;
		};
	}

	interface Session {
		user: {
			email: string;
		};
	}
}
