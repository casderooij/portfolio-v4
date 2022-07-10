<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = async ({ fetch }) => {
		const response = await fetch(`/api/weeks.json`)
		const weeks = await response.json()

		return {
			props: {
				weeks
			}
		}
	}
</script>

<script lang="ts">
	import '../styles/app.css'
	import type { Week } from '$utils/types'
	import HomePageHeader from '$components/HomePageHeader.svelte'
	import Timeline from '$components/Timeline.svelte'

	export let weeks: Week[]
</script>

<header>
	<a href="/">/</a>
	<ul>
		<li><a href="/info">info</a></li>
		<li><a href="/projects">projects</a></li>
	</ul>
</header>

<main>
	<div class="timeline-wrapper">
		<HomePageHeader />
		<Timeline {weeks} />
	</div>
	<div class="divider" />
	<div class="page-wrapper">
		<slot />
	</div>
</main>

<footer>
	<p>Cas de Rooij</p>
	<ul>
		<li>
			<a href="#">github</a>
		</li>
		<li>
			<a href="#">instagram</a>
		</li>
	</ul>
</footer>

<style lang="postcss">
	:global(html) {
		--header-height: var(--size-8);
	}

	header {
		margin-inline: var(--size-2);
		border-bottom: var(--border);

		position: sticky;
		top: 0;
		height: var(--header-height);
		z-index: 2;

		display: flex;
		justify-content: space-between;
		align-items: center;

		background-color: var(--background);

		a {
			background-color: white;
			color: var(--text);
			text-decoration: none;
			padding-inline: var(--size-3);
			padding-block: var(--size-1);
			border-radius: var(--radius-round);
		}

		ul {
			display: flex;
			gap: var(--size-2);
		}
	}

	main {
		min-height: calc(100vh - var(--header-height));
		scroll-margin-top: var(--header-height);
		display: grid;
		grid-template-columns: 1fr 1px 1fr;
		padding-inline: var(--size-2);
	}

	.timeline-wrapper {
		position: sticky;
		top: var(--header-height);
		height: calc(100vh - var(--header-height));
		overflow-y: scroll;
		padding-right: var(--size-2);
	}

	.page-wrapper {
		margin-block: var(--size-2);
		padding-left: var(--size-2);
	}

	.divider {
		margin-block: var(--size-2);
		border-right: var(--border);
	}

	footer {
		margin-inline: var(--size-2);
		padding-block: var(--size-2);
		display: flex;
		justify-content: space-between;
		border-top: var(--border);

		ul {
			display: flex;
			gap: var(--size-2);
		}
	}
</style>
