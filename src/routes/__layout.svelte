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

<!-- <footer >footer</footer> -->
<style lang="postcss">
	header {
		background-color: lightcoral;
		height: var(--size-6);

		display: flex;
		justify-content: space-between;
		align-items: center;

		ul {
			display: flex;
		}
	}

	main {
	}

	.timeline-wrapper {
		background: lightcyan;
	}

	.page-wrapper {
		background: lightblue;
	}
</style>
