<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';
	import type { SvelteComponent } from 'svelte';

	export const load = async ({ params }): Promise<LoadOutput> => {
		try {
			const project: SvelteComponent = await import(
				`../../data/_projects/${params.project}/index.md`
			);

			return {
				props: {
					ProjectContent: project.default,
					meta: { ...project.metadata }
				}
			};
		} catch (error) {
			return {
				status: 404,
				error: error.message
			};
		}
	};
</script>

<script lang="ts">
	// export let ProjectContent: SvelteComponent;
	export let meta: any;
</script>

<h1>{meta.title}</h1>

<ul>
	{#each meta.weeks as week}
		<li><a href="/#{week.year}-{week.number}">{week.number} {week.year}</a></li>
	{/each}
</ul>
