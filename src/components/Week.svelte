<script lang="ts">
	import type { PositionedBlock } from '$utils/types'

	import { spring } from 'svelte/motion'
	import ProjectBlock from './ProjectBlock.svelte'

	export let number: number
	export let blocks: PositionedBlock[]

	let columns = spring([1, 1, 1, 1, 1, 1, 1], { stiffness: 0.1, damping: 0.4 })

	function handleFocusIn(block: PositionedBlock) {
		const newColumns: number[] = new Array(7).fill(1)
		newColumns[block.days[0] - 1] = 5
		$columns = newColumns.reverse()
	}

	function handleFocusOut() {
		$columns = new Array(7).fill(1)
	}
</script>

<div id="week">
	<span class="text-mono-mobile font-mono">{number}</span>

	<div
		class="grid gap-1"
		style="grid-template-columns: {$columns[0]}fr {$columns[1]}fr {$columns[2]}fr {$columns[3]}fr {$columns[4]}fr {$columns[5]}fr {$columns[6]}fr ;"
	>
		{#each blocks as block, index}
			{#if block.project}
				<ProjectBlock {block} />
			{:else}
				<div
					tabindex="0"
					on:touchstart={() => handleFocusIn(block)}
					on:focus={() => handleFocusIn(block)}
					on:focusout={handleFocusOut}
					class="bg-blue-300 aspect-square"
					style="grid-column: {block.column}; grid-row: {block.row};"
				/>
			{/if}
		{/each}
	</div>
</div>
