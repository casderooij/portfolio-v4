<script lang="ts">
	import type { Week as WeekType } from '$utils/types'
	import Week from '$components/Week.svelte'

	export let weeks: WeekType[]
</script>

<ul>
	{#each weeks as week}
		<Week blocks={week.blocks} />
	{/each}
</ul>
