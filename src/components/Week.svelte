<script lang="ts">
	import { spring } from 'svelte/motion';
	import { fly } from 'svelte/transition';
	import Block from './Block.svelte';
	import ProjectBlock from './ProjectBlock.svelte';

	export let number: number;
	export let blocks: any;

	let columns = spring([1, 1, 1, 1, 1, 1, 1], { stiffness: 0.1, damping: 0.4 });
	let active: number;
	let weekEl: HTMLElement;

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

<div id="week" bind:this={weekEl}>
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
						active = index;
					}}
					on:focus={() => {
						$columns = growBlock(block.days);
						active = index;
					}}
					on:focusout={() => ($columns = [1, 1, 1, 1, 1, 1, 1])}
					class="bg-blue-300 aspect-square z-20"
					style="grid-column: {block.column}; grid-row: {block.row};"
				/>
			{/if}

			<!-- <div
				tabindex="0"
				on:click={(e) => {
					$columns = growBlock(block.days);
					active = index;
				}}
				on:focus={() => {
					$columns = growBlock(block.days);
					active = index;
				}}
				class={`bg-white rounded relative flex flex-col divide-y divide-black divide-dashed border border-black overflow-hidden self-center cursor-pointer ${
					index === active ? 'shadow-block' : ''
				}`}
				style={`grid-column: ${block.column};
 grid-row: ${block.row}; ${block.row > 1 ? 'margin-top: -14px;' : ''} ${
					block.row % 2 === 0 ? 'margin-right: 4px;' : 'margin-left: 4px;'
				} ${index === active ? 'z-index: 10;' : ''}`}
			>
				{#if block.slug}
					<p class="p-1 truncate font-mono text-mono-mobile">
						{block.slug}
					</p>
				{/if}
				{#if block.images}
					<div>
						{#each block.images as image}
							<div class="">
								<div class="bg-red-200 aspect-square" />
							</div>
						{/each}
					</div>
				{/if}
				{#if index === active && block.project}
					<div
						transition:fly
						class="border border-solid border-black bg-white px-2 py-1 absolute top-2 left-2 text-[#00f] font-mono text-mono-mobile"
					>
						{block.project.slug}
					</div>
				{/if}
			</div> -->
		{/each}
	</div>
</div>
