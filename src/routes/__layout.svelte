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
		<Timeline {weeks} />
	</div>
	<div class="page-wrapper">
		<slot />
	</div>
</main>

<footer>footer</footer>

<style lang="postcss">
	:global(html) {
		--header-height: var(--size-6);
	}

	header {
		background-color: lightcoral;

		position: sticky;
		top: 0;
		height: var(--header-height);
		z-index: 2;

		display: flex;
		justify-content: space-between;
		align-items: center;

		ul {
			display: flex;
		}
	}

	main {
		min-height: calc(100vh - var(--header-height));
		scroll-margin-top: var(--header-height);
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.timeline-wrapper {
		background: lightcyan;
		position: sticky;
		top: var(--header-height);
		height: calc(100vh - var(--header-height));
		overflow-y: scroll;
	}

	.page-wrapper {
		background: lightblue;
	}

	footer {
		background: yellow;
	}
</style>
