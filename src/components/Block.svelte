<script lang="ts">
	export let column: string;
	export let row: number;
	export let onClick: () => void;
</script>

<div
	on:click={onClick}
	class={`bg-white flex flex-col divide-y divide-black overflow-hidden border border-black ${
		row > 1 ? 'self-center' : 'self-start'
	}`}
	style={`grid-column: ${column};
 grid-row: ${row}; ${row > 1 ? 'margin-top: -4px;' : ''}`}
>
	<slot />
</div>
