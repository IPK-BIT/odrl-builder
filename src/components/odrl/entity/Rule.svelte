<script>
	export let rule;
	export let index;
	export let componentConfig = {};

	let label = 'Rule';
	if (componentConfig.label) {
		label = componentConfig.label;
	}

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function removeRule() {
		rule = {};
		dispatch('removeRule', { index });
	}
</script>

<section class="border border-neutral-100 bg-base-200 p-2 rounded-md">
	<div class="">
		<table>
			<tbody>
				<tr>
					<td>Assignee</td>
					<td>
						<input class="input input-bordered input-sm w-96" bind:value={rule.assignee.uid} />
					</td>
				</tr>
				<tr>
					<td>Assigner</td>
					<td>
						<input class="input input-bordered input-sm w-96" bind:value={rule.assigner.uid} />
					</td>
				</tr>
				<tr>
					<td>Asset</td>
					<td>
						<input class="input input-bordered input-sm w-96" bind:value={rule.target.uid} />
					</td>
				</tr>
				<tr>
					<td>Action</td>
					<td>
						<input class="input input-bordered input-sm w-96" bind:value={rule.action} />
					</td>
				</tr>
			</tbody>
		</table>

		<div class="flow-root h-10 pt-2">
			<button class="btn btn-sm btn-secondary" on:click={removeRule}>Remove {label}</button>
		</div>
	</div>
</section>
