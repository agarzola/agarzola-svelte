import { writable } from 'svelte/store';

function createTitle() {
	const {subscribe, set, update} = writable('');

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
