<script lang="ts">
	export let title;
	export let weeks;
</script>

<h1>{title}</h1>

<ul>
	{#each weeks as week}
		<li>
			<a href="#{week.number}">{week.number}</a>
		</li>
	{/each}
</ul>
