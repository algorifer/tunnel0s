import { writable } from 'svelte/store';
import { userInfo } from 'os';

export const ipfs = writable(null);
export const tunnel = writable(null);
export const tunnelID = writable(null);
export const tunnelName = writable(`0s`);
export const tunnelSubscribe = writable(false);
export const tunnelPeers = writable([]);
export const tunnelMessages = writable([]);
