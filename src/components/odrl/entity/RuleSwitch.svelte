<script>
	import Schemas from '@/lib/schemas';
	import Rule from './Rule.svelte';
	import { odrlObj } from '@/stores/odrl';
	import { config } from '@/stores/config';
	import Constraints from './Constraints.svelte';
	import ruleDefinitions from '@/assets/rules.json';

	let rules;
	export { rules as value };
	export let componentConfig = {};
	export let noun = 'Rule', verb = 'do';
	export let description = '';
	if (componentConfig.noun) {
		noun = componentConfig.noun;
		verb = componentConfig.verb;
		description = componentConfig.description;
	}

	export let jsonPath = '';

	function setRule(type) {
		let action = componentConfig.item;

		if (type === 'permission') {
			let permission = $odrlObj.permission.find((r) => {
				return r.action === action;
			});
			if (!permission) {
				permission = Schemas.getObjectFromSchema('rule');
				permission.action = action;
				$odrlObj.permission = [...$odrlObj.permission, permission];
			} else {
				$odrlObj.permission = $odrlObj.permission.filter((r) => {
					return r.action !== action;
				});
			}
			$odrlObj.prohibition = $odrlObj.prohibition.filter((r) => {
				return r.action !== action;
			});
		} else if (type === 'prohibition') {
			let prohibition = $odrlObj.prohibition.find((r) => {
				return r.action === action;
			});
			if (!prohibition) {
				prohibition = Schemas.getObjectFromSchema('rule');
				prohibition.action = action;
				$odrlObj.prohibition = [...$odrlObj.prohibition, prohibition];
			} else {
				$odrlObj.prohibition = $odrlObj.prohibition.filter((r) => {
					return r.action !== action;
				});
			}
			$odrlObj.permission = $odrlObj.permission.filter((r) => {
				return r.action !== action;
			});
		} else {
			$odrlObj.permission = $odrlObj.permission.filter((r) => {
				return r.action !== action;
			});
			$odrlObj.prohibition = $odrlObj.prohibition.filter((r) => {
				return r.action !== action;
			});
		}
	}
</script>

<p class="w-full pb-4">
	{@html description}
</p>

<div class="tabs tabs-boxed">
	<button
		class:tab-active={$odrlObj.permission.find((r) => {
			return r.action === componentConfig.item;
		})}
		class="tab h-full"
		on:click={() => {
			setRule('permission');
		}}>Permit {noun}</button
	>
	<button
		class:tab-active={$odrlObj.prohibition.find((r) => {
			return r.action === componentConfig.item;
		})}
		class="tab h-full"
		on:click={() => {
			setRule('prohibition');
		}}>Prohibit {noun}</button
	>
	<button
		class:tab-active={!(
			$odrlObj.permission.find((r) => {
				return r.action === componentConfig.item;
			}) ||
			$odrlObj.prohibition.find((r) => {
				return r.action === componentConfig.item;
			})
		)}
		class="tab h-full"
		on:click={() => {
			setRule('reset');
		}}>I don't care</button
	>
</div>

{#if $odrlObj.permission.find((r) => {
	return r.action === componentConfig.item;
})}
	<Constraints
		rule={$odrlObj.permission.find((r) => {
			return r.action === componentConfig.item;
		})}
		{componentConfig}
	/>
{/if}

{#if $odrlObj.prohibition.find((r) => {
	return r.action === componentConfig.item;
})}
	<Constraints
		rule={$odrlObj.prohibition.find((r) => {
			return r.action === componentConfig.item;
		})}
		{componentConfig}
	/>
{/if}

{#if $odrlObj.permission.find((r) => {
	return r.action === componentConfig.item;
}) || $odrlObj.prohibition.find((r) => {
		return r.action === componentConfig.item;
	}) || config.general.showSelectionDefaults}
	<p class="italic p-2 my-2 bg-base-300 rounded-lg">
		{#if $odrlObj.permission.find((r) => {
			return r.action === componentConfig.item;
		})}
			{ruleDefinitions.find((r)=>{return r.key === componentConfig.item}).permission}
		{:else if $odrlObj.prohibition.find((r) => {
			return r.action === componentConfig.item;
		})}
			{ruleDefinitions.find((r)=>{return r.key === componentConfig.item}).prohibition}
		{:else if config.general.showSelectionDefaults}
			The user is not allowed to {verb} the asset.
		{/if}
	</p>
{/if}
