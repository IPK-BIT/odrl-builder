import { writable, get } from 'svelte/store';
import { keyed } from 'svelte-keyed';

function createOdrlStoresSynced() {
	const storeOdrlObj = writable({});
	const storeOdrlStr = writable('');

	const setIsaObj = (odrlObj) => {
		storeOdrlObj.set(odrlObj);
		storeOdrlStr.set(JSON.stringify(odrlObj, null, 2));
	};

	const updateIsaObj = (odrlObj) => {
		storeOdrlObj.update(odrlObj);
		storeOdrlStr.set(JSON.stringify(get(storeOdrlObj), null, 2));
	};

	const setIsaStr = (isaStr) => {
		storeOdrlObj.set(JSON.parse(isaStr));
		storeOdrlStr.set(isaStr);
	};

	const storesSynced = {
		odrlObj: {
			subscribe: storeOdrlObj.subscribe,
			update: updateIsaObj,
			set: setIsaObj
		},
		odrlStr: {
			subscribe: storeOdrlStr.subscribe,
			set: setIsaStr
		}
	};

	storesSynced.odrlObj.keyed = (level) => keyed(storesSynced.odrlObj, level);

	return storesSynced;
}

const storesOdrl = createOdrlStoresSynced();

export const odrlObj = storesOdrl.odrlObj;
export const odrlStr = storesOdrl.odrlStr;
