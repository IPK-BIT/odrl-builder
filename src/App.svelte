<script>
	export let config;
	import { setConfig } from '@/stores/config';
	setConfig(config);

	import InitView from './components/general/InitView.svelte';
	import { appstate } from '@/stores/appstate';
	import { questionnaire } from './stores/questionnaire';
	import { odrlStr } from '@/stores/odrl';
	import GenericQuestionnaire from './components/questionnaire/GenericQuestionnaire.svelte';
	import Header from './components/general/Header.svelte';
	import AppCss from './AppCss.svelte';

	if (config.general?.initialView === 'questionnaire') {
		$appstate = appstate.QUESTIONNAIRE;
	}

	let showJson = true;
</script>

<main>
	<AppCss />
	{#if $appstate == appstate.INIT}
		<InitView />
	{:else}
		<div class="content" class:grid={config.general.layoutMode === 'standalone'}>
			{#if config.general.layoutMode === 'standalone'}
				<div class="header">
					<Header />
				</div>

				<div class="leftcol">
					{#if $appstate !== appstate.QUESTIONNAIRE}
						<div class="bbox" style="margin-bottom: 20px;">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								href="#"
								on:click|preventDefault={() => {
									$appstate = appstate.GUI;
								}}>Show as Simplified Preview</a
							>
						</div>

						<!-- <TreeView /> -->
					{/if}

					{#if $appstate === appstate.QUESTIONNAIRE && config?.general?.showProgressBar}
						<div class="bbox">
							<p style="margin: 0 0 5px 0;">Your progress:</p>
							<div id="progress-bar">
								<div
									id="progress"
									style:width={($questionnaire.currentStep / $questionnaire.steps) * 100 + '%'}
								></div>
								<div id="progress-percent">
									{Math.floor(($questionnaire.currentStep / $questionnaire.steps) * 100)}%
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/if}

			<div class="middlecol">
				<div class="bbox">
					{#if $appstate === appstate.FORM}
						<!-- <Investigation bind:value={$isaObj} /> -->
					{:else if $appstate === appstate.QUESTIONNAIRE}
						<GenericQuestionnaire
							on:closeQuestionnaire={() => {
								$appstate = appstate.GUI;
							}}
						/>
					{:else}
						App is running
					{/if}
				</div>
			</div>

			{#if config.general.layoutMode === 'standalone'}
				<div class="rightcol">

					{#if $appstate !== appstate.QUESTIONNAIRE || true == true}
						<div class="bbox" id="json">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<strong
								>ODRL (<a href="#" on:click={() => (showJson = !showJson)}
									>{showJson ? 'hide' : 'show'}</a
								>)</strong
							><br />
							{#if showJson}
								<textarea bind:value={$odrlStr} id="json-textarea"></textarea>
							{/if}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</main>

<style>
	#progress-bar {
		border: 0px solid rgb(160, 160, 160);
		background: rgb(225, 225, 225);
		height: 25px;
		position: relative;
	}

	#progress {
		background: hsl(207, 82%, 45%);
		height: 100%;
		width: 0%;
	}

	#progress-percent {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 25px;
		padding: 4px 0 0 0;
		text-align: center;
		font-size: 0.95em;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(strong) {
		font-weight: 500;
	}
	main {
		font-family: 'Roboto', sans-serif;
		height: 100vh;
	}

	div.content {
		padding: 0px 0px;
		min-height: 90vh;
		height: 100vh;
	}

	div.content.grid {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 60px auto;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.header {
		grid-area: 1 / 1 / 1 / 4;
		background: white;
		border-bottom: 2px solid rgb(150, 150, 150);
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
	}
	.leftcol {
		grid-area: 2 / 1 / 2 / 2;
		align-self: stretch;
		padding: 20px 0;
		padding-left: 15px;
		padding-right: 10px;
	}
	.middlecol {
		grid-area: 2 / 2 / 2 / 3;
		overflow-y: auto;
		padding: 0 10px 20px 10px;
		margin-top: 20px;
	}

	:global(div.bbox) {
		background: white;
		border-radius: 6px;
		padding: 20px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
	}
	.rightcol {
		grid-area: 2 / 3 / 2 / 4;
		align-self: stretch;
		padding: 20px 0;
		padding-left: 10px;
		padding-right: 15px;
		border-left: 0px solid rgb(190, 190, 190);
	}
	#json {
		padding: 10px;
		background: white;
	}
	#json-textarea {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		min-height: 500px;

		padding: 2px;
		color: rgb(30, 30, 30);
		overflow-x: scroll;
		white-space: pre;
		border: 1px solid rgb(180, 180, 180);
		margin-top: 3px;
		font-size: 0.9em;
		font-family: monospace;
	}
	textarea:focus-visible {
		outline: none;
	}
	:global(div.attr) {
		padding: 10px 10px;
		margin-bottom: 0px;
		box-sizing: border-box;
	}
	:global(div.attr > h4) {
		margin: 0 0 5px 0;
		color: darkslateblue;
	}
	:global(label) {
		display: inline-block;
		width: 250px;
	}
</style>
