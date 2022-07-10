<script lang="ts">
	import type { PositionedBlock } from '$utils/types'

	export let block: PositionedBlock
</script>

<a
	href="/projects/{block.project.slug}"
	class="bg-white cursor-pointer undeline top-0 left-0 z-10 self-start border border-black px-2 py-1 truncate"
	style:grid-column={block.column}
	style:grid-row={block.row}
	style:margin-top={block.row > 1 ? '-12px' : ''}
>
	{block.project.title}
</a>

<style lang="postcss">
	a {
		background-color: #fff;
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		padding-inline: var(--size-2);
		padding-block: var(--size-1);
		top: 0;
		left: 0;
		align-self: flex-start;
		border: 1px solid var(--gray-9);
		overflow: hidden;
	}
</style>
