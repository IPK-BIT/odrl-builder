<script>
	import Schemas from '@/lib/schemas';
	import Rule from './Rule.svelte';

	let rules;
	export { rules as value };
	export let componentConfig = {};
	export let label = 'Rule';
	export let jsonPath = '';

	if (componentConfig.label) {
		label = componentConfig.label;
	}

	function addRule() {
		let emptyRule = Schemas.getObjectFromSchema('rule');
		rules = [...rules, emptyRule];
	}

	function onRemoveRule(event) {
		rules.splice(event.detail.index, 1);
		rules = [...rules];
	}

	function printJsonPath() {
		console.log(jsonPath);
	}
</script>

<section class="space-y-2">
	<div class="space-y-1">
		{#each rules as rule, index}
			<Rule on:change on:removeRule={onRemoveRule} bind:rule {componentConfig} {index} />
		{/each}
	</div>
	<button class="btn btn-sm btn-secondary" on:click={addRule}>Add {label}</button>
</section>
