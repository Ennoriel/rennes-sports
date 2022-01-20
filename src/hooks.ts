import mongoUtil from '$lib/utils/db'
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    mongoUtil.init();
    return resolve(event);
};
