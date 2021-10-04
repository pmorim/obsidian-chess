import { writable } from 'svelte/store';
import { DEFAULT_SETTINGS } from './default';

export const settings = writable(DEFAULT_SETTINGS);
