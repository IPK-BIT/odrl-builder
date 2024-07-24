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

<section>
	{#if Object.keys($odrlObj).length > 0}
		{#await forceUpdate(doRerender) then _}
			<h2 style="margin:0; font-weight: 700; font-size: 1.3em;">
				Step {currentStep + 1} of {steps.length}
			</h2>

			<p id="question">{steps[currentStep].title}</p>

			<div class="input-wrapper">
				<div on:keypress={handleKeypress} role="button" tabindex="0" aria-pressed="false">
					{#key currentStep}
						{#if steps[currentStep].text}
							{#each steps[currentStep].text as paragraph}
								<p>{paragraph}</p>
							{/each}
						{/if}

						{#if steps[currentStep].fields}
							{#each steps[currentStep].fields as field, i}
								{#if field.isaMapping.jsonPath && !field.isaMapping.commentName}
									<FieldWrapper
										component={fieldTypes[field.type]}
										jsonPath={field.isaMapping.jsonPath}
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

			<div style="margin-top: 45px; display: flow-root;">
				{#if currentStep > 0}
					<button class="btn large" on:click={() => prev()}>Previous</button>
				{/if}

				{#if currentStep < steps.length - 1}
					<button class="btn large float-right" on:click={() => next()}>Next</button>
				{:else}
					<button class="btn large float-right" on:click={closeQuestionnaire}>Close wizard</button>
				{/if}
			</div>
		{/await}
	{/if}
</section>

<style>
	#question {
		font-weight: 500;
		font-size: 115%;
		color: rgb(30, 30, 30);
		margin-bottom: 40px;
	}

	.input-wrapper {
		padding: 0px;
		border: 0px solid rgb(200, 200, 200);
	}

	.float-right {
		float: right;
	}
</style>
