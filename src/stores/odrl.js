import { writable, get } from 'svelte/store';
import { keyed } from 'svelte-keyed';

function createOdrlStoresSynced() {
	const storeOdrlObj = writable({});
	const storeOdrlStr = writable('');

	const setOdrlObj = (odrlObj) => {
		storeOdrlObj.set(odrlObj);
		storeOdrlStr.set(JSON.stringify(odrlObj, null, 2));
	};

	const updateOdrlObj = (odrlObj) => {
		storeOdrlObj.update(odrlObj);
		storeOdrlStr.set(JSON.stringify(get(storeOdrlObj), null, 2));
	};

	const setOdrlStr = (odrlStr) => {
		storeOdrlObj.set(JSON.parse(odrlStr));
		storeOdrlStr.set(odrlStr);
	};

	const storesSynced = {
		odrlObj: {
			subscribe: storeOdrlObj.subscribe,
			update: updateOdrlObj,
			set: setOdrlObj
		},
		odrlStr: {
			subscribe: storeOdrlStr.subscribe,
			set: setOdrlStr
		}
	};

	storesSynced.odrlObj.keyed = (level) => keyed(storesSynced.odrlObj, level);

	return storesSynced;
}

const storesOdrl = createOdrlStoresSynced();

export const odrlObj = storesOdrl.odrlObj;
export const odrlStr = storesOdrl.odrlStr;
