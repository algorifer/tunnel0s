import { writable } from 'svelte/store';

export const userID = writable(null);
export const userName = writable(``);
export const isServer = writable(false);
