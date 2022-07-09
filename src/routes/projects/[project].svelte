<script context="module" lang="ts">
	import type { Load } from './__types/[project]';
	import type { SvelteComponent } from 'svelte';
	import type { Project } from '$utils/types';

	export const load: Load<{ ProjectContent: SvelteComponent; meta: Project }> = async ({
		params
	}) => {
		const project = await import(`../../data/_projects/${params.project}/index.md`);

		return {
			props: {
				ProjectContent: project.default,
				meta: { ...project.metadata }
			}
		};
	};
</script>

<script lang="ts">
	export let ProjectContent: SvelteComponent;
	export let meta: Project;
</script>

<h1>{meta.title}</h1>

<ul>
	{#each meta.weeks as week}
		<li><a href="/#{week.year}-{week.number}">{week.number} {week.year}</a></li>
	{/each}
</ul>

<svelte:component this={ProjectContent} />
