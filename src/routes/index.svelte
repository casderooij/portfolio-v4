<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';
	export const load = async ({ fetch }): Promise<LoadOutput> => {
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
	import Week from '../components/Week.svelte';
	import Block from '../components/Block.svelte';

	export let weeks;
</script>

<div class="flex flex-col gap-y-4 divide-y divide-black divide-dashed">
	{#each weeks as week}
		<Week number={week.number} blocks={week.blocks} />
	{/each}
</div>
