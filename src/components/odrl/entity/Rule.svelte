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

<section>
    <div class="attr">
        <table>
            <tbody>
                <tr>
                    <td>Assignee</td>
                    <td>
                        <input bind:value={rule.assignee.uid}/>
                    </td>
                </tr>
                <tr>
                    <td>Assigner</td>
                    <td>
                        <input bind:value={rule.assigner.uid}/>
                    </td>
                </tr>
                <tr>
                    <td>Asset</td>
                    <td>
                        <input bind:value={rule.target.uid}/>
                    </td>
                </tr>
                <tr>
                    <td>Action</td>
                    <td>
                        <input bind:value={rule.action.uid}/>
                    </td>
                </tr>
                <tr>
                    <td>Constraint</td>
                    <td>
                        <input bind:value={rule.constraint.uid}/>
                    </td>
                </tr>
            </tbody>
        </table>

    <div style="display: flow-root; height: 40px; padding-top: 20px;">
        <button class="btn btn-secondary" on:click={removeRule}>Remove {label}</button>
    </div>
</div>
</section>

<style>
	section {
		margin-bottom: .5rem;
	}
</style>
