<script lang="ts">
	export let projects: any
</script>

<ul>
	{#each projects as project}
		<li>
			<a href="/projects/{project.slug}">{project.title}</a>
		</li>
	{/each}
</ul>
