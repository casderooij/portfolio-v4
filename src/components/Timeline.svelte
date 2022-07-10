<script lang="ts">
	import type { Week as WeekType } from '$utils/types'
	import Week from '$components/Week.svelte'

	export let weeks: WeekType[]
</script>

<div class="flex flex-col gap-4 divide-y divide-black">
	{#each weeks as week}
		<Week number={week.number} blocks={week.blocks} />
	{/each}
</div>
