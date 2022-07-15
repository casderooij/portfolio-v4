<header>
	<nav>
		<a href="/">home</a>
		<a href="/info">info</a>
	</nav>
</header>

<style lang="postcss">
	header {
		margin-inline: var(--spacing);
		padding-block-start: var(--spacing);

		@media (--md-n-above) {
			padding-block-end: var(--spacing);
		}
	}

	nav {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}

	a {
		background-color: var(--bg-3);
		color: white;
		padding-inline: var(--size-3);
		padding-block: var(--size-1);
		border-radius: var(--radius-round);
		text-decoration: none;
	}
</style>
