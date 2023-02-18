import { writable } from 'svelte/store';

function createDescription() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set,
		clear: () => {
			set('The humble website of Alfonso Gómez-Arzola.');
		}
	}
}

function createTitle() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set: (value) => {
			set(`${value} Alfonso Gómez-Arzola`)
		},
		clear: () => {
			set('Alfonso Gómez-Arzola');
		}
	}
}

export const title = createTitle();
export const description = createDescription();
