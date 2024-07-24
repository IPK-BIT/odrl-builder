import { writable } from 'svelte/store';

function createAppStateStore() {
	const states = {
		INIT: 'init',
		FORM: 'form',
		QUESTIONNAIRE: 'questionnaire',
		GUI: 'gui'
	};

	const store = writable(states.INIT);

	return {
		subscribe: store.subscribe,
		set: store.set,
		...states
	};
}

export const appstate = createAppStateStore();
