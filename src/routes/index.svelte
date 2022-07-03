<script lang="ts">
	import weeks from '../data/weeks';
	import Week from '../components/Week.svelte';
	import Block from '../components/Block.svelte';
</script>

<div class="flex flex-col gap-y-4 divide-y divide-black divide-dashed">
	{#each weeks as week}
		<Week number={week.number} blocks={week.blocks} />
	{/each}
</div>
