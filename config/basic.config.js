window.config = {
	general: {
		layoutMode: 'standalone', // 'standalone', 'plugin'
		initialView: 'questionnaire', // 'init', 'questionnaire', 'form', 'gui'
		showProgressBar: true,
		showSelectionDefaults: true,
		persistance: {
			// pdf: 'https://aruna-engine.org/',
			// roc: 'https://git.nfdi4plants.org/',
			// repo: 'https://aruna-engine.org/'
		}
	},

	prefill: [
		{
			type: 'value',
			odrlMapping: {
				entity: 'policy',
				attribute: '@context'
			},
			value: 'https://www.w3.org/ns/odrl.jsonld'
		},
		{
			type: 'value',
			odrlMapping: {
				entity: 'policy',
				attribute: '@type'
			},
			value: 'Set'
		},
		{
			type: 'object',
			odrlMapping: {
				entity: 'policy',
				attribute: 'assigner'
			},
			value: {
				'@type': 'Party',
				'uid': '',
			}
		}
	],

	checklist: {}
};
