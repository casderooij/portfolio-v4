<script lang="ts">
	import type { PositionedBlock } from '$utils/types'

	export let block: PositionedBlock
</script>

<a
	href="/projects/{block.project.slug}"
	class="underline"
	style:grid-column={block.column}
	style:grid-row={block.row}
>
	{block.project.title}
</a>

<style lang="postcss">
	a {
		background-color: var(--bg-2);
		color: var(--acc-1);
		padding-inline: var(--size-2);
		padding-block: var(--size-1);
		top: 0;
		left: 0;
		align-self: flex-start;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: var(--font-size-0);
		border-radius: var(--radius-1);
	}
</style>
