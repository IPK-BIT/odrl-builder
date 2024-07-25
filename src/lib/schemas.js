import action_schema from '@/lib/schemas/action_schema.json';
import asset_schema from '@/lib/schemas/asset_schema.json';
import constraint_schema from '@/lib/schemas/constraint_schema.json';
import rule_schema from '@/lib/schemas/rule_schema.json';
import party_schema from '@/lib/schemas/party_schema.json';
import policy_schema from '@/lib/schemas/policy_schema.json';

const mapping = {
	action: action_schema,
	asset: asset_schema,
	constraint: constraint_schema,
	party: party_schema,
	policy: policy_schema,
	rule: rule_schema
};

export default class Schemas {
	static getObjectFromSchema(identifier, prefill = {}) {
		let schema = mapping[identifier];

		const getDatatypeByJsonType = (/** @type {string} */ type) => {
			let types = {
				string: '',
				array: [],
				object: {}
			};
			return types[type];
		};

		let obj = {};
		let keys = [];
		for (const [k, v] of Object.entries(schema.properties)) {
			keys.push(k);

			if (v['type'] === 'string') {
				obj[k] = '';
			} else if (v['type'] === 'array') {
				obj[k] = [];
			} else if (v['type'] === 'object') {
				let entries = Object.entries(v['properties']);
				obj[k] = Object.fromEntries(
					entries.map((x) => [x[0], getDatatypeByJsonType(x[1]['type'])])
				);
			} else if (v['anyOf'] !== undefined) {
				if (v['anyOf'][0]['type'] === 'string') {
					obj[k] = '';
				}
			} else {
				obj[k] = {};
			}
		}

		if (Object.keys(prefill).length > 0) {
			this.addPrefill(obj, prefill);
		}

		return obj;
	}

	static addPrefill(entity, prefill) {
		if (prefill) {
			for (let item of prefill) {
				if (item.type === 'value') {
					if (item.odrlMapping.entity === 'policy') {
						entity[item.odrlMapping.attribute] = item.value;
					}
				}
			}
		}
		return entity;
	}
}
