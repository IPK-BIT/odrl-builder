<script>
	import { config } from '@/stores/config';
	import { odrlObj } from '@/stores/odrl';

	function downloadJSON() {
		const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify($odrlObj));
		const downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute('href', dataStr);
		downloadAnchorNode.setAttribute('download', 'odrl.json');
		document.body.appendChild(downloadAnchorNode);
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	}

	function downloadPDF() {
		console.log('not implemented');
	}
</script>

<section class="p-4">
	<h1 class="font-bold text-lg">{$odrlObj['@type']}</h1>
	<table class="table">
		{#if $odrlObj.uid}
			<tr>
				<th>Identifier</th>
				<td>{$odrlObj['uid']}</td>
			</tr>
		{/if}
		<tr>
			<th>Permissions</th>
			<td class="space-y-1">
				{#each $odrlObj.permission as permission}
					<table class="table bg-base-200">
						{#if permission.assigner && permission.assigner.uid}
							<tr>
								<th class="w-1/5">Assigner</th>
								<td>{permission.assigner.uid}</td>
							</tr>
						{/if}
						{#if permission.assignee && permission.assignee.uid}
							<tr>
								<th class="w-1/5">Assignee</th>
								<td>{permission.assignee.uid}</td>
							</tr>
						{/if}
						{#if permission.target && permission.target.uid}
							<tr>
								<th class="w-1/5">Target</th>
								<td>{permission.target.uid}</td>
							</tr>
						{/if}
						<tr>
							<th class="w-1/5">Action</th>
							<td>{permission.action}</td>
						</tr>
					</table>
				{/each}
			</td>
		</tr>
		<tr>
			<th>Prohibitions</th>
			<td class="space-y-1">
				{#each $odrlObj.prohibition as prohibition}
					<table class="table bg-base-200">
						{#if prohibition.assigner && prohibition.assigner.uid}
							<tr>
								<th class="w-1/5">Assigner</th>
								<td>{prohibition.assigner.uid}</td>
							</tr>
						{/if}
						{#if prohibition.assignee && prohibition.assignee.uid}
							<tr>
								<th class="w-1/5">Assignee</th>
								<td>{prohibition.assignee.uid}</td>
							</tr>
						{/if}
						{#if prohibition.target && prohibition.target.uid}
							<tr>
								<th class="w-1/5">Target</th>
								<td>{prohibition.target.uid}</td>
							</tr>
						{/if}
						<tr>
							<th class="w-1/5">Action</th>
							<td>{prohibition.action}</td>
						</tr>
					</table>
				{/each}
			</td>
		</tr>
		<tr>
			<th>Obligations</th>
			<td class="space-y-1">
				{#each $odrlObj.obligation as duty}
					<table class="table bg-base-200">
						{#if duty.assigner && duty.assigner.uid}
							<tr>
								<th class="w-1/5">Assigner</th>
								<td>{duty.assigner.uid}</td>
							</tr>
						{/if}
						{#if duty.assignee && duty.assignee.uid}
							<tr>
								<th class="w-1/5">Assignee</th>
								<td>{duty.assignee.uid}</td>
							</tr>
						{/if}
						{#if duty.target && duty.target.uid}
							<tr>
								<th class="w-1/5">Target</th>
								<td>{duty.target.uid}</td>
							</tr>
						{/if}
						<tr>
							<th class="w-1/5">Action</th>
							<td>{duty.action}</td>
						</tr>
					</table>
				{/each}
			</td>
		</tr>
	</table>
</section>

<section class="p-4">
	<h1 class="font-bold text-lg">Export Options</h1>
	<div class="bg-base-200 p-1 rounded-lg flex justify-between join">
		<button class="btn btn-sm font-normal w-1/4 join-item hover:btn-accent" on:click={downloadJSON}
			>Export as JSON</button
		>
		<button
			class="btn btn-sm font-normal w-1/4 join-item hover:btn-accent"
			on:click={downloadPDF}
			disabled={!config.general.persistance.pdf}>Export as PDF</button
		>
		<button
			class="btn btn-sm font-normal w-1/4 join-item hover:btn-accent"
			disabled={!config.general.persistance.repo}>Persist in Repository</button
		>
		<button
			class="btn btn-sm font-normal w-1/4 join-item hover:btn-accent"
			disabled={!config.general.persistance.roc}>Persist in RO-Crate</button
		>
	</div>
</section>
