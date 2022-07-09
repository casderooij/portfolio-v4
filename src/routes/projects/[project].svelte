<script context="module" lang="ts">
	import type { Load } from './__types/[project]';
	import type { SvelteComponent } from 'svelte';
	import type { Week } from '$utils/types';

	export const load: Load<{
		ProjectContent: SvelteComponent;
		meta: { title: string; slug: string };
		weeks: { number: number; year: number }[];
	}> = async ({ params }) => {
		const project = await import(`../../data/_projects/${params.project}/index.md`);
		const meta = { title: project.metadata.title, slug: project.metadata.slug };
		const weeks = project.metadata.weeks.map((week: Week) => ({
			number: week.number,
			year: week.year
		}));

		return {
			props: {
				ProjectContent: project.default,
				meta,
				weeks
			}
		};
	};
</script>

<script lang="ts">
	export let ProjectContent: SvelteComponent;
	export let meta: { title: string; slug: string };
	export let weeks: { number: number; year: number }[];
</script>

<h1>{meta.title}</h1>

<ul>
	{#each weeks as week}
		<li><a href="/#{week.year}-{week.number}">{week.number} {week.year}</a></li>
	{/each}
</ul>

<svelte:component this={ProjectContent} />
