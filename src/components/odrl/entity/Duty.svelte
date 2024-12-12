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
	if (componentConfig.verb) {
		verb = componentConfig.verb;
		noun = componentConfig.noun;
		description = componentConfig.description;
	}

	export let jsonPath = '';

	function setDuty(type) {
		if (type === 'add') {
			let emptyDuty = Schemas.getObjectFromSchema('rule');
			emptyDuty.action = componentConfig.item;
			emptyDuty['@type'] = 'Rule';
			$odrlObj.obligation = [...$odrlObj.obligation, emptyDuty];
		} else {
			$odrlObj.obligation = $odrlObj.obligation.filter((r) => {
				return r.action !== componentConfig.item;
			});
		}
	}
</script>

<p class="w-full pb-4">
	{@html description}
</p>

<div class="tabs tabs-boxed">
	<button
		class="tab h-full"
		class:tab-active={$odrlObj.obligation.find((r) => {
			return r.action === componentConfig.item;
		})}
		on:click={() => {
			setDuty('add');
		}}>Require {noun}</button
	>
	<button
		class="tab h-full"
		class:tab-active={!$odrlObj.obligation.find((r) => {
			return r.action === componentConfig.item;
		})}
		on:click={() => {
			setDuty('remove');
		}}>Not necessary</button
	>
</div>

<!-- {#if $odrlObj.obligation.find((r) => {
	return r.action === componentConfig.item;
})}
	<Constraints
		rule={$odrlObj.obligation.find((r) => {
			return r.action === componentConfig.item;
		})}
		{componentConfig}
	/>
{/if} -->

{#if $odrlObj.obligation.find((r) => {
	return r.action === componentConfig.item;
}) || $odrlObj.obligation.find((r) => {
		return r.action === componentConfig.item;
	}) || config.general.showSelectionDefaults}
	<p class="italic p-2 my-2 bg-base-300 rounded-lg">
		{#if $odrlObj.obligation.find((r) => {
			return r.action === componentConfig.item;
		})}
			{@html ruleDefinitions.find((r)=>{return r.key===componentConfig.item}).obligation}
		{:else if config.general.showSelectionDefaults}
			The user does not need to {verb} the data holder to use the asset.
		{/if}
	</p>
{/if}
