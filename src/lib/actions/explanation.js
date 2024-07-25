import { explanation } from '@/stores/explanation.js';

export function explanationActionFactory(odrlLevel) {
	let action = (elem) => {
		elem.addEventListener('focus', (ev) => {
			explanation.setOdrlLevel(odrlLevel);
			explanation.setAttr(elem.dataset.attr);
		});
		elem.addEventListener('blur', (ev) => {
			explanation.reset();
		});
	};
	return action;
}
