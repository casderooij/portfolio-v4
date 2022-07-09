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

	let show = false;
</script>

<div class="relative overflow-x-hidden min-h-screen">
	<Header />

	<div class="sm:hidden">
		<slot />
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2 divide-x divide-black">
		<div class="flex flex-col gap-y-4 divide-y divide-black">
			{#each weeks as week}
				<Week number={week.number} blocks={week.blocks} />
			{/each}
		</div>
		<div class="px-2 hidden sm:block"><slot /></div>
	</div>
</div>
