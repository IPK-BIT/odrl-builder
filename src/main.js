import App from '@/App.svelte';

const useShadowDOM = false;

function startApp(containerId, params) {
	const _containerId = '#' + containerId;
	const container = document.querySelector(_containerId);
	let target;

	if (useShadowDOM) {
		target = container.attachShadow({ mode: 'open' });
	} else {
		target = container;
	}

	const config = {
		general: params.config?.general,
		checklist: params.config?.checklist,
		prefill: params.prefill,
		steps: params.steps,
		explanations: params.explanations
	};

	const app = new App({
		target: target,
		props: {
			// @ts-ignore
			config: config
		}
	});
	return app;
}

// @ts-ignore
window.odrlBuilder = {
	startApp: startApp
};
