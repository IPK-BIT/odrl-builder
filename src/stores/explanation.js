import { writable } from 'svelte/store';

function createExplanationStore() {
	const store = writable({
		odrlLevel: undefined,
		attr: undefined
	});

	return {
		subscribe: store.subscribe,

		setContext: (getContext) =>
			store.update((x) => {
				let odrlLevel = getContext('odrlLevel');
				x.odrlLevel = odrlLevel;
				return x;
			}),

		setOdrlLevel: (odrlLevel) =>
			store.update((x) => {
				x.odrlLevel = odrlLevel;
				return x;
			}),

		setAttr: (attr) =>
			store.update((x) => {
				x.attr = attr;
				return x;
			}),

		reset: () =>
			store.update((x) => {
				x.attr = false;
				return x;
			})
	};
}

export const explanation = createExplanationStore();
