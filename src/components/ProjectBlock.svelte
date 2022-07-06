<script lang="ts">
	import type { PositionedBlock } from '$utils/types';

	export let block: PositionedBlock;
</script>

<div
	class="absolute left-2 top-0 border-l border-black border-dashed h-full"
	style="grid-column: {block.column}; grid-row: {block.row};"
/>
<a
	href="/projects/{block.project.slug}"
	class="bg-white z-10 top-0 underline left-0 self-start border border-black px-2 py-1 rounded overflow-hidden truncate font-mono text-mono-mobile text-[#00f] focus:z-20"
	style="grid-column: {block.column}; grid-row: {block.row}; margin-top: {block.row > 1
		? '-14px'
		: ''};"
>
	{block.project.title}
</a>
