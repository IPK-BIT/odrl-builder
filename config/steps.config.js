window.steps = [
	{
		title: 'Welcome to the ODRL Builder',
		text: ['This tool will help you create ODRL policies.']
	},
	{
		title: 'Provide basic information about the data usage agreement',
		fields: [
			{
				label: 'Identifier',
				type: 'text',
				odrlMapping: {
					jsonPath: 'uid'
				},
				explanation: 'DM-1'
			}
		]
	},
	{
		title: 'Add permissions to your policy',
		component: 'Rules',
		jsonPath: 'permission',
		componentConfig: {
			label: 'Permission',
			explanation: 'DM-3'
		}
	},
	{
		title: 'Add prohibitions to your policy',
		component: 'Rules',
		jsonPath: 'prohibition',
		componentConfig: {
			label: 'Prohibition'
		}
	},
	{
		title: 'Add duties to your policy',
		component: 'Rules',
		jsonPath: 'duty',
		componentConfig: {
			label: 'Duty'
		}
	}
];
