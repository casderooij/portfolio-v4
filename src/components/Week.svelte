<script lang="ts">
	import { spring } from 'svelte/motion';
	import ProjectBlock from './ProjectBlock.svelte';

	export let number: number;
	export let blocks: any;

	let columns = spring([1, 1, 1, 1, 1, 1, 1], { stiffness: 0.1, damping: 0.4 });

	function getDateOfWeek(w, y) {
		const d = 1 + (w - 1) * 7;
		return new Date(y, 0, d + 8);
	}

	function getDay(start, d) {
		return new Date(new Date().setDate(start.getDate() + d)).getDate();
	}

	const startDate = getDateOfWeek(number, 2022);

	function growBlock(days: number[]) {
		let index = 0;
		let newCols = [];
		for (let i = 1; i <= 7; i++) {
			if (i === days[index]) {
				newCols.push(4 / days.length);
				index++;
			} else {
				newCols.push(1);
			}
		}
		return newCols.reverse();
	}

	/**
	 * when block has no images and is project, on click: open project panel directly
	 * when block has images and is project, on click: scale block and show link to project panel
	 *
	 */

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
					class="bg-blue-300 aspect-square z-20"
					style="grid-column: {block.column}; grid-row: {block.row};"
				/>
			{/if}
		{/each}
	</div>

	<div
		class="grid font-mono text-mono-mobile gap-x-2 mt-2"
		style="grid-template-columns: {$columns[0]}fr {$columns[1]}fr {$columns[2]}fr {$columns[3]}fr {$columns[4]}fr {$columns[5]}fr {$columns[6]}fr ;"
	>
		<p>{getDay(startDate, 0)}</p>
		<p>{getDay(startDate, -1)}</p>
		<p>{getDay(startDate, -2)}</p>
		<p>{getDay(startDate, -3)}</p>
		<p>{getDay(startDate, -4)}</p>
		<p>{getDay(startDate, -5)}</p>
		<p>{getDay(startDate, -6)}</p>
	</div>
</div>
