<script lang="ts">
	import { currentPage } from '$utils/stores'

	$: isCurrentPage = $currentPage === href

	export let href: string
	export let label: string
</script>

<li class:active={isCurrentPage}>
	<a {href} aria-current={isCurrentPage ? 'page' : false}>{label}</a>
</li>

<style lang="postcss">
	li {
		color: white;
		background-color: var(--bg-3);
		padding-inline: 1em;
		padding-block: var(--size-1);
		border-radius: var(--radius-round);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.active::before {
		content: '● ';
	}
</style>
