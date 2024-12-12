<script>
	import { odrlObj } from '@/stores/odrl';
	export let constraint;
	export let index;
	export let componentConfig = {};
	let label = 'Restriction';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let constraints = [
		'geographical restriction',
		'research use case',
		'time duration',
		'embargo date'
	];
	let operators = [
		{
			label: '>',
			value: 'lt'
		},
		{
			label: '<',
			value: 'gt'
		},
		{
			label: '>=',
			value: 'get'
		},
		{
			label: '<=',
			value: 'let'
		},
		{
			label: '==',
			value: 'eq'
		},
		{
			label: '!=',
			value: 'neq'
		}
	]
	let selectedConstraint;

	function removeRule() {
		constraint = {};
		dispatch('removeConstraint', { index });
	}

	function updateConstraint() {}
</script>

<section class="bg-base-200 p-1 my-1 rounded-lg">
	<select
		class="select select-bordered select-sm"
		bind:value={constraint.leftOperand}
		on:change={() => {
			$odrlObj = $odrlObj;
		}}
	>
		<option value="" disabled>Choose a restriction</option>
		{#each constraints as c}
			<option>{c}</option>
		{/each}
	</select>
	<select
		class="select select-bordered select-sm"
		bind:value={constraint.operator}
		on:change={() => {
			$odrlObj = $odrlObj;
		}}
	>
		<option value="" disabled> </option>
		{#each operators as o}
			<option value={o.value}>{o.label}</option>
		{/each}
	</select>
	{#if constraint.leftOperand === 'embargo date'}
		<input
			type="date"
			class="input input-bordered input-sm"
			bind:value={constraint.rightOperand}
			on:change={() => {
				$odrlObj = $odrlObj;
			}}
		/>
	{:else if constraint.leftOperand === 'time duration'}
		<input
			type="number"
			class="input input-bordered input-sm"
			bind:value={constraint.rightOperand}
			on:change={() => {
				$odrlObj = $odrlObj;
			}}
		/>
	{:else if constraint.leftOperand === 'geographical restriction'}
		<select
			class="select select-bordered select-sm"
			bind:value={constraint.rightOperand}
			on:change={() => {
				$odrlObj = $odrlObj;
			}}
		>
			<option value="" selected disabled>Specify the restriction</option>
			<option value="iso:DE">Germany</option>
			<option value="iso:EU">Europe</option>
		</select>
	{:else}
		<input
			class="input input-bordered input-sm"
			bind:value={constraint.rightOperand}
			on:change={() => {
				$odrlObj = $odrlObj;
			}}
		/>
	{/if}
	<button class="btn btn-sm btn-secondary hover:btn-error" on:click={removeRule}
		>Remove {label}</button
	>
</section>
