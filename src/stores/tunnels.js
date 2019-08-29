import { writable } from 'svelte/store';

export const tunnel = writable(null);
export const tunnelID = writable(null);
export const tunnelName = writable(null);
export const tunnelSeens = writable([]);
export const tunnelMessages = writable([]);
