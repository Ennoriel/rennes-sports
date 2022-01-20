import mongoUtil from '$lib/utils/db'
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
    mongoUtil.init();
    return resolve(request);
};
