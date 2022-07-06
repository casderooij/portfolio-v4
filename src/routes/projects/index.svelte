<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';
	export const load = async ({ fetch }): Promise<LoadOutput> => {
		const response = await fetch(`/api/projects.json`);
		const projects = await response.json();

		return {
			props: {
				projects
			}
		};
	};
</script>

<script lang="ts">
	export let projects: any;
</script>

<ul>
	{#each projects as project}
		<li>
			<a href="/projects/{project.meta.slug}">{project.meta.title}</a>
		</li>
	{/each}
</ul>
