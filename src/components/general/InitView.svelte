<script>
	import Schemas from '@/lib/schemas';
	import { appstate } from '@/stores/appstate';
	import { odrlObj } from '@/stores/odrl';
	import { config } from '@/stores/config';

	async function startQuestionnaireMode() {
		if (Object.keys($odrlObj).length == 0) {
			let emptyPolicy = Schemas.getObjectFromSchema('policy', config.prefill);
			$odrlObj = emptyPolicy;
		}
		$appstate = appstate.QUESTIONNAIRE;
	}

	async function startExpertMode() {
		$appstate = appstate.FORM;
	}

	async function loadOdrlFromJson() {
		$appstate = appstate.QUESTIONNAIRE;
	}
</script>

<section>
	<div class="box">
		<div>
			<img id="logo" src="data/logo.png" alt="ODRL Builder Logo" />
			<h1>Welcome to the ODRL Builder</h1>
			<p>A web application to create data usage agreements compliant to ODRL.</p>
			<button on:click|preventDefault={() => startQuestionnaireMode()}
				>Start Questionnaire Mode</button
			> <br />
			<button on:click|preventDefault={() => startExpertMode()}>Start Expert Mode</button> <br />
			<button on:click|preventDefault={() => loadOdrlFromJson()}>Load ODRL from File</button>
		</div>
	</div>
</section>

<style>
	section {
		height: 100%;
	}
	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.box div {
		width: 600px;
		border-radius: 10px;
		text-align: center;
		padding: 50px;
		background: white;
		border: 1px solid rgb(200, 200, 200);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}
	#logo {
		width: 200px;
		height: 200px;
	}
	h1 {
		font-weight: normal;
		font-size: 200%;
		margin-bottom: 1rem;
	}
	p {
		font-style: italic;
		color: rgb(70, 70, 70);
		margin-bottom: 4rem;
	}
	button {
		display: block;
		width: 100%;
		border: none;
		background: linear-gradient(0deg, hsl(208, 25%, 11%) 0%, hsl(208, 25%, 21%) 100%);

		padding: 14px 28px;
		font-size: 16px;
		cursor: pointer;
		text-align: center;
		color: white;
		border-radius: 6px;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	}

	button:hover {
		background-color: rgb(50, 75, 150);
		background: linear-gradient(0deg, hsl(208, 25%, 21%) 0%, hsl(208, 25%, 31%) 100%);
	}
</style>
