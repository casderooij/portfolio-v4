<div>
	<slot />
</div>

<style lang="postcss">
	div {
		background-color: var(--background);
		width: 100vw;
		height: 100%;
		transform: translateX(-100%);
		padding: var(--size-2);

		@media (--md-n-above) {
			width: 100%;
			transform: translateX(0);
		}
	}
</style>
