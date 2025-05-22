import { writable } from 'svelte/store';

export const section = writable('Home');

export const changeSection = (newSection: string) => {
	section.set(newSection);
};
