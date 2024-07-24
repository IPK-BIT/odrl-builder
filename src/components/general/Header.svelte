<script>
	import { appstate } from '@/stores/appstate';
	import { odrlObj } from '@/stores/odrl';

	function loadMinimal() {
		$odrlObj = {
			'@context': 'https://www.w3.org/ns/odrl.jsonld',
			'@type': 'Policy',
			permissions: [
				{
					'@type': 'Permission',
					action: 'use'
				}
			],
			prohibitions: [],
			duties: []
		};
	}
</script>

<header class="flex-container">
	<div class="flex-items" style="vertical-align: top;">
		<img src="data/logo.png" alt="MIAPPE Wizard" />
		<h1>ODRL Builder</h1>
	</div>

	<div class="flex-items">
		{#if $appstate !== appstate.QUESTIONNAIRE}
			<button class="btn btn-secondary" on:click|preventDefault={loadMinimal}
				>Load Minimal Example</button
			>
		{/if}
	</div>
</header>

<style>
	header {
		color: black;
		padding: 10px 15px;
		margin-bottom: 0px;
	}

	h1 {
		margin: 7px 0 0 15px;
		padding: 0;
		display: inline-block;
		font-size: 150%;
		font-weight: 500;
	}

	img {
		width: 40px;
		float: left;
	}

	.flex-container {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: normal;
		align-content: normal;
	}

	.flex-items:nth-child(1) {
		display: block;
		flex-grow: 0;
		flex-shrink: 1;
		flex-basis: auto;
		align-self: auto;
		order: 0;
		padding-right: 100px;
	}

	.flex-items:nth-child(2) {
		display: block;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: auto;
		align-self: center;
		order: 0;
	}
</style>
