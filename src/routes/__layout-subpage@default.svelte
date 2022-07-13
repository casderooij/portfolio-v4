<div>
	<slot />
</div>

<style lang="postcss">
	div {
		background-color: var(--bg-1);
		width: 100vw;
		height: 100%;
		transform: translateX(-100%);
		padding: var(--spacing);

		@media (--md-n-above) {
			width: 100%;
			transform: translateX(0);
		}
	}
</style>
