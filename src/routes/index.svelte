<script lang="ts">
	import weeks from '../data/weeks';
	import Week from '../components/Week.svelte';
	import Block from '../components/Block.svelte';
</script>

<div class="flex flex-col gap-y-4 divide-y divide-black divide-dashed">
	{#each weeks as week}
		<Week number={week.number}>
			{#each week.blocks as block}
				<Block
					column={block.column}
					row={block.row}
					columnWidth={block.columnWidth}
					hasImage={!!block.images}
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
									<!-- <Img
										src={`/images/${image.src}`}
										alt={image.alt}
										aspect={block.columnWidth === 1 ? 1 : null}
									/> -->
								</div>
							{/each}
						</div>
					{/if}
				</Block>
			{/each}
		</Week>
	{/each}
</div>
