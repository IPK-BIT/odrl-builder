<script>
	import { odrlObj } from '@/stores/odrl';
</script>

<section class="p-4">
	<h1 class="font-bold text-lg">{$odrlObj['@type']}</h1>
	<table class="table">
		<tr>
			<th>Identifier</th>
			<td>{$odrlObj['uid']}</td>
		</tr>
		<tr>
			<th>Permissions</th>
			<td class="space-y-1">
				{#each $odrlObj.permission as permission}
					<table class="table bg-base-200">
						<tr>
							<th>Assigner</th>
							<td>{permission.assigner.uid}</td>
						</tr>
						<tr>
							<th>Assignee</th>
							<td>{permission.assignee.uid}</td>
						</tr>
						<tr>
							<th>Target</th>
							<td>{permission.target.uid}</td>
						</tr>
						<tr>
							<th>Action</th>
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
						<tr>
							<th>Assigner</th>
							<td>{prohibition.assigner.uid}</td>
						</tr>
						<tr>
							<th>Assignee</th>
							<td>{prohibition.assignee.uid}</td>
						</tr>
						<tr>
							<th>Target</th>
							<td>{prohibition.target.uid}</td>
						</tr>
						<tr>
							<th>Action</th>
							<td>{prohibition.action}</td>
						</tr>
					</table>
				{/each}
			</td>
		</tr>
		<tr>
			<th>Duties</th>
			<td class="space-y-1">
				{#each $odrlObj.duty as duty}
					<table class="table bg-base-200">
						<tr>
							<th>Assigner</th>
							<td>{duty.assigner.uid}</td>
						</tr>
						<tr>
							<th>Assignee</th>
							<td>{duty.assignee.uid}</td>
						</tr>
						<tr>
							<th>Target</th>
							<td>{duty.target.uid}</td>
						</tr>
						<tr>
							<th>Action</th>
							<td>{duty.action}</td>
						</tr>
					</table>
				{/each}
			</td>
		</tr>
	</table>
</section>
