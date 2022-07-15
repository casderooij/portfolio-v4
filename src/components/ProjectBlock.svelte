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
		/* background-color: var(--bg-3); */
		background-color: #fff;
		color: #303030;
		padding-inline: var(--size-2);
		padding-block: var(--size-1);
		top: 0;
		left: 0;
		align-self: flex-start;
		white-space: nowrap;
		overflow: hidden;
		border-radius: var(--radius-2);
		font-size: var(--font-size-0);
		text-decoration: none;
		text-overflow: ellipsis;
	}
</style>
