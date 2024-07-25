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

<main class="bg-base-100 h-screen">
	<div class="absolute top-4 right-4">
		<label class="swap swap-rotate">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" class="theme-controller" value="dark" />
		  
			<!-- sun icon -->
			<svg
			  class="swap-off h-8 w-8 fill-current"
			  xmlns="http://www.w3.org/2000/svg"
			  viewBox="0 0 24 24">
			  <path
				d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
			</svg>
		  
			<!-- moon icon -->
			<svg
			  class="swap-on h-8 w-8 fill-current"
			  xmlns="http://www.w3.org/2000/svg"
			  viewBox="0 0 24 24">
			  <path
				d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
			</svg>
		  </label>
	</div>
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
