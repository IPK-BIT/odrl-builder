window.steps = [
	{
		title: 'Welcome to the ODRL Builder',
		text: ['This tool will help you create ODRL policies.']
	},
	{
		title: 'Add permissions to your policy',
		component: 'Rules',
		jsonPath: 'permissions',
		componentConfig: {
			label: 'Permission',
			explanation: 'DM-3'
		}
	},
	{
		title: 'Add prohibitions to your policy',
		component: 'Rules',
		jsonPath: 'prohibitions',
		componentConfig: {
			label: 'Prohibition'
		}
	},
	{
		title: 'Add duties to your policy',
		component: 'Rules',
		jsonPath: 'duties',
		componentConfig: {
			label: 'Duty'
		}
	}
];
