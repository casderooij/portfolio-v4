<div>
	<slot />
</div>

<style lang="postcss">
	div {
		width: 0;

		@media (--md-n-above) {
			width: auto;
		}
	}
</style>
