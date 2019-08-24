import { writable } from 'svelte/store';

export const tunnel = writable(null);
export const tunnelId = writable(null);
export const tunnelName = writable(`0s`);
export const tunnelSubscribe = writable(false);
export const tunnelMsgs = writable([]);
