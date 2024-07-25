<script>
	import { explanation } from '@/stores/explanation';
	import { config } from '@/stores/config';

	const explanations = config.explanations.reduce((result, obj) => {
		result[obj.id] = obj;
		return result;
	}, {});
</script>

<section class="shadow-xl rounded-xl mb-4">
	{#if $explanation.attr !== undefined && $explanation.attr !== false && explanations?.[$explanation.attr] !== undefined}
		<div class="p-4">
			<strong>Explanation:</strong>
			<p>{explanations?.[$explanation.attr]?.definition}</p>

			{#if explanations?.[$explanation.attr]?.example}
				<strong>Example:</strong>
				<p>{explanations?.[$explanation.attr]?.example}</p>
			{/if}
		</div>
	{/if}
</section>
