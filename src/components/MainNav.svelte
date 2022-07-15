<script lang="ts">
	import { browser } from '$app/env'
	import { page } from '$app/stores'
	import NavItem from './NavItem.svelte'

	let currentPage = '/'

	$: if (browser) {
		currentPage = $page.url.pathname
	}
</script>

<nav>
	<ul>
		<NavItem href="/" label="timeline" />
		<NavItem href="/info" label="info" />
	</ul>
</nav>

<style lang="postcss">
	nav {
		position: fixed;
		right: 0;
		top: 0;
		z-index: 2;

		margin-inline: var(--spacing);
		padding-block-start: var(--spacing);

		@media (--md-n-above) {
			padding-block-end: var(--spacing);
		}
	}

	ul {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
</style>
