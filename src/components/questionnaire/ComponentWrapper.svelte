<script>
	export let component;
	export let jsonPath = undefined;
	export let componentConfig = {};

	import { odrlObj } from '@/stores/odrl';

	let value;

	if (jsonPath) {
		value = odrlObj.keyed(jsonPath);
	}
</script>

<svelte:component this={component} bind:value={$value} {jsonPath} {componentConfig} />
