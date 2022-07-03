<script lang="ts">
	import { spring } from 'svelte/motion';

	export let number: number;
	export let blocks: any;

	let columns = spring([1, 1, 1, 1, 1, 1, 1], { stiffness: 0.1, damping: 0.4 });

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
</script>

<div>
	<span class="text-mono-mobile font-mono">{number}</span>

	<div
		class="grid gap-1"
		style="grid-template-columns: {$columns[0]}fr {$columns[1]}fr {$columns[2]}fr {$columns[3]}fr {$columns[4]}fr {$columns[5]}fr {$columns[6]}fr ;"
	>
		{#each blocks as block}
			<div
				on:click={() => ($columns = growBlock(block.days))}
				class={`bg-white rounded flex flex-col divide-y divide-black overflow-hidden border border-black self-start cursor-pointer`}
				style={`grid-column: ${block.column};
 grid-row: ${block.row};`}
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
			</div>
		{/each}
	</div>
</div>
