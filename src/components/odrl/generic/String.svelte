<script>
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

	function setFocus(el) {
		if ($appstate == appstate.QUESTIONNAIRE && focus) {
			el.focus();
		}
	}
</script>

<section style="border: 0px solid black;">
	<div class="attr pure-g v-center">
		<div class="pure-u-5-24">
			{#if showLabel}
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label>{label}</label>
			{/if}
		</div>
		<div class="pure-u-19-24">
			<input
				style="width: 100%;"
				class:wide={!showLabel}
				use:setFocus
				data-isaLevel={isaLevel}
				data-attr={attr}
				type="text"
				bind:value
				on:change
			/>
		</div>
	</div>
</section>
