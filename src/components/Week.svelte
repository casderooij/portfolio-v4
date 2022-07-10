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

<li>
	<div
		class="week-wrapper"
		style:grid-template-columns="{$columns[0]}fr {$columns[1]}fr {$columns[2]}fr {$columns[3]}fr {$columns[4]}fr
		{$columns[5]}fr {$columns[6]}fr"
	>
		{#each blocks as block, index}
			{#if block.project}
				<ProjectBlock {block} />
			{:else}
				<div
					class="single-day"
					style:grid-column={block.column}
					style:grid-row={block.row}
					tabindex="0"
					on:touchstart={() => handleFocusIn(block)}
					on:focus={() => handleFocusIn(block)}
					on:focusout={handleFocusOut}
				/>
			{/if}
		{/each}
	</div>
</li>

<style lang="postcss">
	li {
		padding-block: var(--size-2);
		border-bottom: var(--border);
	}
	li:last-child {
		border-bottom: none;
	}

	.week-number {
		font-size: var(--font-size-0);
	}

	.week-wrapper {
		display: grid;
		gap: var(--size-1);
	}

	.single-day {
		background-color: var(--blue-3);
		aspect-ratio: var(--ratio-square);
		border-radius: var(--radius-1);
		cursor: pointer;
	}
</style>
