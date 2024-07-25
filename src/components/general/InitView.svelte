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
		let input = document.createElement('input');
		input.type = 'file';
		input.accept = '.json,application/json';
		input.onchange = () => {
			let fileLoaded = (e) => {
				let lines = e.target.result;
				let json = JSON.parse(lines);
				$odrlObj = json;
				$appstate = appstate.QUESTIONNAIRE;
			};

			let fr = new FileReader();
			fr.onload = fileLoaded;
			fr.readAsText(input.files[0]);
		};
		input.click();
	}
</script>

<section class="flex justify-center items-center align-middle h-screen">
	<div class="card bg-base-200 w-1/4 shadow-xl">
		<div class="card-body items-center text-center">
			<figure class="p-5 mx-5 bg-white rounded-full">
				<img id="logo" src="data/logo.png" alt="ODRL Builder Logo" />
			</figure>
			<h1 class="text-2xl font-semibold">Welcome to the ODRL Builder</h1>
			<p>A web application to create data usage agreements compliant to ODRL.</p>
			<button
				class="btn btn-primary w-full"
				on:click|preventDefault={() => startQuestionnaireMode()}>Start Questionnaire Mode</button
			>
			<button class="btn btn-primary w-full" on:click|preventDefault={() => startExpertMode()}
				>Start Expert Mode</button
			>
			<button class="btn btn-primary w-full" on:click|preventDefault={() => loadOdrlFromJson()}
				>Load ODRL from File</button
			>
		</div>
	</div>
</section>
