<script>
	import { questionnaire } from '@/stores/questionnaire';
</script>

<div class="shadow-xl rounded-md p-2">
	<p class="font-semibold">Your progress:</p>
	<div class="bg-base-200 h-8">
		<div
			class="bg-accent h-8"
			style:width={($questionnaire.currentStep / $questionnaire.steps) * 100 + '%'}
		></div>
		<div class="w-full text-center -translate-y-7">
			{Math.floor(($questionnaire.currentStep / $questionnaire.steps) * 100)}%
		</div>
	</div>
</div>
