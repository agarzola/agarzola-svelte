import { writable } from 'svelte/store';

function createDescription() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set,
		clear: () => set('The humble website of Alfonso Gómez-Arzola.'),
	};
}

function createModifiedTime() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set,
		clear: () => set(null),
	};
}

function createPublishedTime() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set,
		clear: () => set(null),
	};
}

function createTitle() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set: (value) => set(`${value} Alfonso Gómez-Arzola`),
		clear: () => set('Alfonso Gómez-Arzola'),
	};
}

function createType() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set,
		clear: () => set('website'),
	};
}

export const description = createDescription();
export const modifiedTime = createModifiedTime();
export const publishedTime = createPublishedTime();
export const title = createTitle();
export const type = createType();
