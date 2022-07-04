<script lang="ts">
	export let block: any;
</script>

<div
	class="absolute left-2 top-0 border-l border-black h-full bg-green-400"
	style="grid-column: {block.column}; grid-row: {block.row};"
/>
<a
	href="#/{block.project.slug}"
	class="bg-white z-10 top-0 left-0 self-start border border-black px-2 py-1 rounded overflow-hidden truncate font-mono text-mono-mobile text-[#00f]"
	style="grid-column: {block.column}; grid-row: {block.row}; margin-top: {block.row > 1
		? '-8px'
		: ''};"
>
	{block.slug}
</a>
