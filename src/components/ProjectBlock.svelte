<script lang="ts">
	import type { PositionedBlock } from '$utils/types'

	export let block: PositionedBlock
</script>

<a
	href="/projects/{block.project.slug}"
	class="bg-white cursor-pointer undeline top-0 left-0 z-10 self-start border border-black px-2 py-1 overflow-hidden truncate font-mono text-mono-mobile text-[#00f]"
	style="grid-column: {block.column}; grid-row: {block.row}; margin-top: {block.row > 1
		? '-14px'
		: ''};"
>
	{block.project.title}
</a>
