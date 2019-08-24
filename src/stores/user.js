import { writable } from 'svelte/store';

export const ipfs = writable(null);
export const ipfsId = writable(null);
export const username = writable(``);
export const userRoot = writable(false);
