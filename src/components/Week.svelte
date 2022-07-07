<script lang="ts">
	import type { PositionedBlock } from '$utils/types';

	import { spring } from 'svelte/motion';
	import ProjectBlock from './ProjectBlock.svelte';

	export let number: number;
	export let blocks: PositionedBlock[];

	let columns = spring([1, 1, 1, 1, 1, 1, 1], { stiffness: 0.1, damping: 0.4 });

	function getDateOfWeek(w: number, y: number) {
		const d = 1 + (w - 1) * 7;
		return new Date(y, 0, d + 8);
	}

	function getDay(start: Date, d: number) {
		return new Date(new Date().setDate(start.getDate() + d)).getDate();
	}

	const startDate = getDateOfWeek(number, 2022);

	function growBlock(days: number[]) {
		let index = 0;
		let newCols = [];
		for (let i = 1; i <= 7; i++) {
			if (i === days[index]) {
				newCols.push(5 / days.length);
				index++;
			} else {
				newCols.push(1);
			}
		}
		return newCols.reverse();
	}

	function clickOutside(node: any) {
		const handleClick = (event: any) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('touchstart', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	const days = Array.apply(null, Array(7)).map((_, i) => getDay(startDate, -i));
</script>

<div id="week">
	<span class="text-mono-mobile font-mono">{number}</span>

	<div
		class="grid gap-1 relative pb-1"
		style="grid-template-columns: {$columns[0]}fr {$columns[1]}fr {$columns[2]}fr {$columns[3]}fr {$columns[4]}fr {$columns[5]}fr {$columns[6]}fr ;"
	>
		{#each blocks as block, index}
			{#if block.project}
				<ProjectBlock {block} />
			{:else}
				<div
					id="block"
					tabindex="0"
					on:touchstart={(e) => {
						$columns = growBlock(block.days);
					}}
					on:focus={() => {
						$columns = growBlock(block.days);
					}}
					on:focusout={() => ($columns = [1, 1, 1, 1, 1, 1, 1])}
					class="bg-blue-300 aspect-square"
					style="grid-column: {block.column}; grid-row: {block.row};"
				/>
			{/if}
		{/each}
	</div>

	<div
		class="grid font-mono text-[8px] gap-x-2 mt-2"
		style="grid-template-columns: {$columns[0]}fr {$columns[1]}fr {$columns[2]}fr {$columns[3]}fr {$columns[4]}fr {$columns[5]}fr {$columns[6]}fr ;"
	>
		{#each days as day}
			<span>{day}</span>
		{/each}
	</div>
</div>
