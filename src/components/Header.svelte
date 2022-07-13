<header>
	<a href="/">home</a>
	<ul>
		<li><a href="/info">info</a></li>
		<!-- <li><a href="/projects">projects</a></li> -->
	</ul>
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
			text-decoration: none;
		}

		ul {
			display: flex;
			gap: var(--spacing);
		}
	}
</style>
