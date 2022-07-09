<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const response = await fetch(`/api/weeks.json`);
		const weeks = await response.json();

		return {
			props: {
				weeks
			}
		};
	};
</script>

<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import type { Week as WeekType } from '$utils/types';
	import Week from '$components/Week.svelte';

	export let weeks: WeekType[];
</script>

<!-- full page or in one of the two columns -->
<!-- <Header /> -->

<div class="flex max-h-screen">
	<div class="flex-1 min-h-full overflow-y-scroll p-4">
		{#each weeks as week}
			<Week number={week.number} blocks={week.blocks} />
		{/each}
	</div>
	<div class="flex-1 min-h-full overflow-y-scroll p-4">
		<slot />
	</div>
</div>
