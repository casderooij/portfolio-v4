<script lang="ts">
	export let number: number;
</script>

<div>
	<span class="text-mono-mobile font-mono">{number}</span>

	<div class="grid grid-cols-7 gap-x-0.5">
		<slot />
	</div>
</div>
