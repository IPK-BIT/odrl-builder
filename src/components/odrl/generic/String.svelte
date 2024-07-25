<script>
	import { explanationActionFactory } from '@/lib/actions/explanation';

	export let label = '';
	export let isaLevel = null;
	export let attr;
	export let value;
	export let showLabel = true;
	export let focus = false;

	if (!label) {
		label = attr;
	}

	import { appstate } from '@/stores/appstate';
	import { getContext } from 'svelte';

	if (!isaLevel) {
		isaLevel = getContext('isaLevel');
	}

	let explanationAction = explanationActionFactory(isaLevel);

	function setFocus(el) {
		if ($appstate == appstate.QUESTIONNAIRE && focus) {
			el.focus();
		}
	}
</script>

<section style="">
	<div class="">
		{#if showLabel}
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label font-semibold text-sm underline">{label}</label>
		{/if}
		<input
			class="w-full input input-sm input-bordered"
			use:explanationAction
			use:setFocus
			data-isaLevel={isaLevel}
			data-attr={attr}
			type="text"
			bind:value
			on:change
		/>
	</div>
</section>
