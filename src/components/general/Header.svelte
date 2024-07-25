<script>
	import { appstate } from '@/stores/appstate';
	import { odrlObj } from '@/stores/odrl';

	function loadMinimal() {
		$odrlObj = {
			'@context': 'http://www.w3.org/ns/odrl.jsonld',
			'@type': 'Set',
			uid: 'http://example.com/policy:777',
			permission: [
				{
					target: {
						'@type': 'Asset',
						uid: 'http://example.com/looking-glass.ebook'
					},
					assigner: {
						'@type': 'Party',
						uid: 'http://example.com/org/sony-books'
					},
					assignee: {
						'@type': 'PartyCollection',
						uid: 'http://example.com/team/A'
					},
					action: 'use',
					constraint: []
				}
			],
			prohibition: [],
			duty: []
		};
	}
</script>

<header class="flex flex-row space-x-8 items-center">
	<div class="flex flex-row items-center">
		<figure class=" p-1 m-1 bg-white rounded-full">
			<img class="h-12 w-12" src="data/logo.png" alt="MIAPPE Wizard" />
		</figure>
		<h1 class="font-semibold text-lg">
			<button
				on:click={() => {
					$appstate = appstate.INIT;
				}}>ODRL Builder</button
			>
		</h1>
	</div>

	<div class="space-x-2">
		{#if $appstate !== appstate.QUESTIONNAIRE}
			<button class="btn btn-secondary btn-sm" on:click|preventDefault={loadMinimal}
				>Load Minimal Example</button
			>
		{/if}
	</div>
</header>
