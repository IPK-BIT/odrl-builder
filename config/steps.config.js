window.steps = [
	{
		title: 'Notice Duty',
		component: 'Duty',
		jsonPath: 'set',
		componentConfig: {
			item: 'cc:Notice',
			verb: 'notice the license',
			noun: 'notice',
			description: 'It is crucial to carefully review and comply with the terms of any license when using copyrighted material. Licenses specify the allowed uses, restrictions, and attribution requirements for the work. Failing to adhere to license terms can result in copyright infringement. Users should always check for and properly attribute copyright notices, understand the scope of permissions granted, and be aware of any limitations or conditions attached to the license. This ensures proper utilization of the material while avoiding potential legal issues.'
		}
	},
	{
		title: 'Attribution Duty',
		component: 'Duty',
		jsonPath: 'set',
		componentConfig: {
			item: 'o-dd:attribution',
			verb: 'attribute',
			noun: 'attribution',
			description:'Requiring attribution when using Creative Commons licensed material is an important condition of most CC licenses. The basic requirement is to credit the author, note the source, and specify which license was used. This helps give proper recognition to the original creator while allowing others to legally reuse their work. Attribution should reasonably include all relevant information provided by the licensor, though there is flexibility in how exactly it is presented based on the medium and context. For example, for images, this typically means including the title, author name, source URL, and license type. Proper attribution not only fulfills legal obligations but also maintains ethical standards of academic integrity and gives appropriate credit to content creators'
		}
	},
	{
		title: 'Share Alike Duty',
		component: 'Duty',
		jsonPath: 'set',
		componentConfig: {
			item: 'cc:ShareAlike',
			verb: 'share their works alike',
			noun: 'sharing alike',
			description: 'Requiring sharing alike, typically through Creative Commons licenses like CC BY-SA, ensures that any derivative works or adaptations of licensed material must also be made available under the same license terms. This means that if someone modifies or builds upon a work covered by such a license, they must release their changes back under the same open license, allowing the benefits of openness to propagate. The goal is to maintain the open nature of the work while allowing for legitimate modifications and improvements. However, this requirement can be complex to implement and may limit commercial uses compared to less restrictive licenses'
		}
	},
	{
		title: 'Reproduction of dataset',
		component: 'RuleSwitch',
		jsonPath: 'set',
		componentConfig: {
			item: 'cc:Reproduction',
			verb: 'reproduce',
			noun: 'reproduction',
			description:
				'Giving permission to reproduce licensed material involves several key considerations. First, it\'s important to clearly identify the copyright owner and determine which specific rights are needed for the proposed use. The permission should be obtained in writing, ideally through a formal agreement or license. The terms should specify details like exclusivity, duration, and geographic territory. Payment may be required, with fees often based on factors like audience size and commercial vs. non-commercial use. When granting permission, copyright holders can choose between exclusive (sole) or non-exclusive rights. For the user, getting written permission reduces legal risks compared to relying on oral agreements. Overall, obtaining proper licensing ensures compliance with copyright laws while allowing legitimate uses of protected works.'
		}
	},
	{
		title: 'Distribution of the dataset',
		component: 'RuleSwitch',
		jsonPath: 'set',
		componentConfig: {
			item: 'cc:Distribution',
			verb: 'distribute',
			noun: 'distribution',
			description:
				'When distributing licensed material, it is important to ensure you have the proper permissions in place. This typically involves obtaining written consent from the copyright owner or licensor, specifying the exact rights being granted, the scope of distribution, and any limitations or restrictions. The permission should clearly outline the terms of use, including whether the license is exclusive or non-exclusive, the territorial scope, and the duration of the license. It\'s advisable to get permissions in writing to avoid misunderstandings and protect both parties\' interests. Additionally, consider factors like payment terms, attribution requirements, and any ongoing obligations when drafting the permission agreement. Always err on the side of caution and seek professional legal advice if unsure about the permissions process for a particular use case.'
		}
	},
	{
		title: 'Derivative works of the dataset',
		component: 'RuleSwitch',
		jsonPath: 'set',
		componentConfig: {
			item: 'cc:DerivativeWorks',
			verb: 'derive works',
			noun: 'derivative works',
			description:
				'Giving permission to derive new works from licensed material allows creators to build upon existing content while maintaining control over how their work is used. This can foster innovation and collaboration by enabling derivative works that add value or insights to the original material. However, it\'s important to clearly define the scope of permitted uses and any restrictions in the license agreement. Creators should carefully consider what types of derivative works they want to allow, such as adaptations, remixes, or transformative uses, to ensure their intentions are properly conveyed. By providing clear guidelines, license holders can balance the benefits of openness with the need to protect their original work and maintain its integrity.'
		}
	},
	{
		title: 'Mining of the dataset',
		component: 'RuleSwitch',
		jsonPath: 'set',
		componentConfig: {
			item: 'tdm:mine',
			verb: 'text and data mining',
			noun: 'text and data mining',
			description:
				'Text and data mining (TDM) involves extracting insights from large amounts of digital content through automated processes and algorithms. When it comes to using licensed materials for TDM, permission from the copyright holder or publisher is often required. Many publishers have specific policies and agreements governing TDM activities on their content. Researchers should carefully review license terms and conditions to understand what is allowed, such as the amount of content that can be accessed, how results can be used and shared, and any restrictions on automated scraping or downloading. Some publishers may require the use of approved APIs or other access methods for TDM purposes. Researchers should also consider data retention requirements, as some licenses may stipulate that content must be deleted after a certain period. Overall, obtaining proper permission and complying with license terms is crucial when conducting TDM on licensed materials to avoid potential legal issues.'
		}
	},
	{
		title: 'Commercial use of the dataset',
		component: 'RuleSwitch',
		jsonPath: 'set',
		componentConfig: {
			item: 'odrl:CommercialUse',
			verb: 'commercial use',
			noun: 'commercial use',
			description:
				'When granting permission for commercial use of licensed material, it\'s important to clearly define the terms of the license agreement. This typically includes specifying the scope of permitted uses, geographic territory, duration of the license, and any restrictions or limitations. Commercial licenses often require payment of fees, which may vary based on factors such as audience size, intended use, and exclusivity. The agreement should also address attribution requirements and any warranties or indemnifications. Getting written permission in advance is crucial to avoid potential copyright infringement claims. For creative works protected by copyright, obtaining proper permission before commercial use is essential to ensure legal compliance and protect against potential lawsuits.'
		}
	}, 
	{
		title: 'Complete agreement',
		fields: [
			{
				label: 'Assigner',
				type: 'text',
				odrlMapping: {
					jsonPath: 'assigner.uid',
				},
				explanation: 'DM-1'
			},
			{
				label: 'Assignee',
				type: 'text',
				odrlMapping: {
					jsonPath: 'assignee.uid',
				},
				explanation: 'DM-2'
			},
			{
				label: 'Target',
				type: 'text',
				odrlMapping: {
					jsonPath: 'target.uid',
				},
				explanation: 'DM-3'
			}
		]
	}
];
