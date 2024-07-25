<script>
	import '@/app.css';

	export let config;
	import { setConfig } from '@/stores/config';
	setConfig(config);

	import InitView from './components/general/InitView.svelte';
	import { appstate } from '@/stores/appstate';
	import { questionnaire } from './stores/questionnaire';
	import { odrlStr } from '@/stores/odrl';
	import GenericQuestionnaire from './components/questionnaire/GenericQuestionnaire.svelte';
	import Header from './components/general/Header.svelte';
	import SimpleGui from './components/simple-gui/SimpleGui.svelte';
	import ProgressBar from './components/general/ProgressBar.svelte';
	import Explanation from './components/general/Explanation.svelte';
	if (config.general?.initialView === 'questionnaire') {
		$appstate = appstate.QUESTIONNAIRE;
	}

	let showJson = true;
</script>

<main>
	{#if $appstate == appstate.INIT}
		<InitView />
	{:else}
		{#if config.general.layoutMode === 'standalone'}
			<div class="shadow-lg mb-6">
				<Header />
			</div>
		{/if}
		<div class="flex flex-row">
			{#if config.general.layoutMode === 'standalone'}
				<div class="w-1/5 ml-2 h-full min-h-[200px]">
					{#if $appstate !== appstate.QUESTIONNAIRE && $appstate !== appstate.GUI}
						<div class="shadow-xl rounded-md p-2">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="link link-accent"
								href="#"
								on:click|preventDefault={() => {
									$appstate = appstate.GUI;
								}}>Show as Simplified Preview</a
							>
						</div>

						<!-- <TreeView /> -->
					{/if}

					{#if $appstate === appstate.QUESTIONNAIRE && config?.general?.showProgressBar}
						<ProgressBar />
					{/if}
				</div>
			{/if}

			<div
				class="h-full shadow-xl rounded-lg {config.general.layoutMode === 'standalone'
					? 'w-3/5 mx-4'
					: 'w-full'}"
			>
				<div class="">
					{#if $appstate === appstate.FORM}
						<div class="p-4">Not implemented yet</div>
					{:else if $appstate === appstate.QUESTIONNAIRE}
						<GenericQuestionnaire
							on:closeQuestionnaire={() => {
								$appstate = appstate.GUI;
							}}
						/>
					{:else if $appstate === appstate.GUI}
						<SimpleGui />
					{/if}
				</div>
			</div>

			{#if config.general.layoutMode === 'standalone'}
				<div class="w-1/5 mr-2">
					<Explanation />
					{#if $appstate !== appstate.QUESTIONNAIRE || true == true}
						<div class="shadow-lg p-4 rounded-lg">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<strong
								>ODRL (<a class="link link-info" href="#" on:click={() => (showJson = !showJson)}
									>{showJson ? 'hide' : 'show'}</a
								>)</strong
							><br />
							{#if showJson}
								<textarea
									class="h-full min-h-[500px] w-full textarea textarea-bordered"
									bind:value={$odrlStr}
									id="json-textarea"
								></textarea>
							{/if}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</main>
