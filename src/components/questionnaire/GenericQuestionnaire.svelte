<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import Schemas from '@/lib/schemas';
	import { odrlObj } from '@/stores/odrl';
	import { questionnaire } from '@/stores/questionnaire';
	import { hooksExecuted } from '@/stores/hooksExecuted';
	import { config } from '@/stores/config';
	import ComponentWrapper from './ComponentWrapper.svelte';
	import String from '../odrl/generic/String.svelte';
	import Textarea from '../odrl/generic/Textarea.svelte';
	import Date from '../odrl/generic/Date.svelte';
	import Party from '../odrl/entity/Party.svelte';
	import FieldWrapper from './FieldWrapper.svelte';
	import Rules from '../odrl/entity/Rules.svelte';

	let steps = config.steps;

	$questionnaire.steps = steps.length;

	let currentStep = 0;

	const hooks = {
		addPermission: addPermission
	};

	const fieldTypes = {
		text: String,
		textarea: Textarea,
		date: Date
	};

	const components = {
		Party: Party,
		Rules: Rules
	};

	function addPermission() {
		let emptyPermission = Schemas.getObjectFromSchema('permission');
		$odrlObj['permissions'] = [...$odrlObj['permissions'], emptyPermission];
	}

	const dispatch = createEventDispatcher();

	async function initFirstStep() {
		executeStepHooks(0);
	}

	async function prev() {
		currentStep = currentStep - 1;
		$questionnaire.currentStep = currentStep;
	}

	async function next() {
		currentStep = currentStep + 1;
		$questionnaire.currentStep = currentStep;
		executeStepHooks(currentStep);
	}

	function executeStepHooks(step) {
		if (steps[step] && steps[step].hooks !== undefined && Array.isArray(steps[step].hooks)) {
			for (let hook of steps[step].hooks) {
				const hookId = hook.type + '_' + step;
				if (!$hooksExecuted.includes(hookId)) {
					hooks[hook.type](hook?.parameters);
					$hooksExecuted = [...$hooksExecuted, hookId];
					console.log('execute hook: ', steps[step].hook);
				}
			}
		}
	}

	onMount(() => {
		initFirstStep();
	});

	function closeQuestionnaire() {
		dispatch('closeQuestionnaire');
	}

	function handleKeypress() {}

	const forceUpdate = async (_) => {};
	let doRerender = 0;
</script>

<section class="p-4 space-y-2">
	{#if Object.keys($odrlObj).length > 0}
		{#await forceUpdate(doRerender) then _}
			<h2 class="font-bold text-xl">
				Step {currentStep + 1} of {steps.length}
			</h2>

			<p class="font-semibold text-lg">{steps[currentStep].title}</p>

			<div class="">
				<div on:keypress={handleKeypress} role="button" tabindex="0" aria-pressed="false">
					{#key currentStep}
						{#if steps[currentStep].text}
							{#each steps[currentStep].text as paragraph}
								<p>{paragraph}</p>
							{/each}
						{/if}

						{#if steps[currentStep].fields}
							{#each steps[currentStep].fields as field, i}
								{#if field.odrlMapping.jsonPath && !field.odrlMapping.commentName}
									<FieldWrapper
										component={fieldTypes[field.type]}
										jsonPath={field.odrlMapping.jsonPath}
										{field}
									/>
								{/if}
							{/each}
						{/if}

						{#if steps[currentStep].component}
							<ComponentWrapper
								component={components[steps[currentStep].component]}
								jsonPath={steps[currentStep].jsonPath}
								componentConfig={steps[currentStep].componentConfig}
							/>
						{/if}
					{/key}
				</div>
			</div>

			<div class="flow-root">
				{#if currentStep > 0}
					<button class="btn btn-secondary float-left" on:click={() => prev()}>Previous</button>
				{/if}

				{#if currentStep < steps.length - 1}
					<button class="btn btn-primary float-right" on:click={() => next()}>Next</button>
				{:else}
					<button class="btn btn-primary float-right" on:click={closeQuestionnaire}
						>Close Questionnaire</button
					>
				{/if}
			</div>
		{/await}
	{/if}
</section>
