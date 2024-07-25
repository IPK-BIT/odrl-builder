<script>
	export let component;
	export let field;
	export let jsonPath = undefined;

	import { odrlObj } from '@/stores/odrl';

	let value;

	if (jsonPath) {
		value = odrlObj.keyed(jsonPath);
	}
</script>

<svelte:component
	this={component}
	bind:value={$value}
	showLabel={true}
	label={field.label}
	isaLevel={field.odrlMapping.entity}
	attr={field.explanation}
	componentConfig={field.componentConfig}
/>
