<header>
	<a href="/">home</a>
	<a href="/info">info</a>
</header>

<style lang="postcss">
	header {
		margin-inline: var(--spacing);
		border-bottom: var(--border);

		position: sticky;
		top: 0;
		height: var(--header-height);
		z-index: 2;

		display: flex;
		justify-content: space-between;
		align-items: center;

		background-color: var(--bg-1);

		a {
			background-color: var(--bg-2);
			color: var(--txt-1);
			padding-inline: var(--size-3);
			padding-block: var(--size-1);
			border-radius: var(--radius-2);
			text-decoration: none;
		}
	}
</style>
