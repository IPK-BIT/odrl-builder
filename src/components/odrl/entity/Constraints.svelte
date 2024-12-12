<script>
	import { odrlObj } from '@/stores/odrl';
	import Constraint from './Constraint.svelte';
	import Schemas from '@/lib/schemas';

	export let rule;
	let label = 'Restriction';
	export let componentConfig = {};

	if (
		$odrlObj.permission.find((r) => {
			return r.action === componentConfig.item;
		})
	) {
		let constraints = $odrlObj.permission.find((r) => {
			return r.action === componentConfig.item;
		}).constraint;
	} else if (
		$odrlObj.prohibition.find((r) => {
			return r.action === componentConfig.item;
		})
	) {
		let constraints = $odrlObj.prohibition.find((r) => {
			return r.action === componentConfig.item;
		}).constraint;
	} else if (
		$odrlObj.obligation.find((r) => {
			return r.action === componentConfig.item;
		})
	) {
		let constraints = $odrlObj.obligation.find((r) => {
			return r.action === componentConfig.item;
		}).constraint;
	}

	let index = 0;

	function addConstraint() {
		let emptyConstraint = Schemas.getObjectFromSchema('constraint');
		emptyConstraint['@type'] = 'Constraint';
		if (
			$odrlObj.permission.find((r) => {
				return r.action === componentConfig.item;
			})
		) {
			$odrlObj.permission.find((r) => {
				return r.action === componentConfig.item;
			}).constraint = [
				...$odrlObj.permission.find((r) => {
					return r.action === componentConfig.item;
				}).constraint,
				emptyConstraint
			];
		} else if (
			$odrlObj.prohibition.find((r) => {
				return r.action === componentConfig.item;
			})
		) {
			$odrlObj.prohibition.find((r) => {
				return r.action === componentConfig.item;
			}).constraint = [
				...$odrlObj.prohibition.find((r) => {
					return r.action === componentConfig.item;
				}).constraint,
				emptyConstraint
			];
		} else if (
			$odrlObj.obligation.find((r) => {
				return r.action === componentConfig.item;
			})
		) {
			$odrlObj.obligation.find((r) => {
				return r.action === componentConfig.item;
			}).constraint = [
				...$odrlObj.obligation.find((r) => {
					return r.action === componentConfig.item;
				}).constraint,
				emptyConstraint
			];
		}
		$odrlObj = $odrlObj;
	}

	function onRemoveConstraint(event) {
		console.log(event.detail.index);
		if (
			$odrlObj.permission.find((r) => {
				return r.action === componentConfig.item;
			})
		) {
			$odrlObj.permission.find((r) => {
				return r.action === componentConfig.item;
			}).constraint = $odrlObj.permission
				.find((r) => {
					return r.action === componentConfig.item;
				})
				.constraint.filter((_, i) => i !== event.detail.index);
		} else if (
			$odrlObj.prohibition.find((r) => {
				return r.action === componentConfig.item;
			})
		) {
			$odrlObj.prohibition.find((r) => {
				return r.action === componentConfig.item;
			}).constraint = $odrlObj.prohibition
				.find((r) => {
					return r.action === componentConfig.item;
				})
				.constraint.filter((_, i) => i !== event.detail.index);
		} else if (
			$odrlObj.obligation.find((r) => {
				return r.action === componentConfig.item;
			})
		) {
			$odrlObj.obligation.find((r) => {
				return r.action === componentConfig.item;
			}).constraint = $odrlObj.obligation
				.find((r) => {
					return r.action === componentConfig.item;
				})
				.constraint.filter((_, i) => i !== event.detail.index);
		}
		$odrlObj = $odrlObj;
	}
</script>

<p class="font-semibold">{label}s</p>
<section class="px-2">
	<div class="space-y-1 mb-2">
		{#each rule.constraint as c, index}
			<Constraint
				on:change
				on:removeConstraint={onRemoveConstraint}
				bind:constraint={c}
				{componentConfig}
				{index}
			/>
		{/each}
	</div>
	<button class="btn btn-sm btn-secondary" on:click={addConstraint}>Add {label}</button>
</section>
