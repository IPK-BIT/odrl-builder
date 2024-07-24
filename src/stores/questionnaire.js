import { writable } from 'svelte/store';

export const questionnaire = writable({
	steps: 1,
	currentStep: 0
});
