<script lang="ts">
	import HomePageHeader from '$components/HomePageHeader.svelte'
</script>

<div>
	<HomePageHeader />
</div>

<style lang="postcss">
	div {
		display: none;

		@media (--md-n-above) {
			display: block;
		}
	}
</style>
