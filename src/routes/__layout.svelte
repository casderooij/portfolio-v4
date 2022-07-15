<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = async ({ url, fetch }) => {
		const response = await fetch(`/api/weeks.json`)
		const weeks = await response.json()

		return {
			props: {
				weeks,
				path: url.pathname
			}
		}
	}
</script>

<script lang="ts">
	import '../styles/app.css'
	import type { Week } from '$utils/types'
	import Timeline from '$components/Timeline.svelte'
	import Footer from '$components/Footer.svelte'
	import MainNav from '$components/MainNav.svelte'
	import Intro from '$components/Intro.svelte'
	import { currentPage } from '$utils/stores'

	export let weeks: Week[]
	export let path: string

	$: currentPage.set(path)
</script>

<div class="nav-wrapper">
	<MainNav />
</div>

<main>
	<div class="timeline-wrapper">
		<div class="mobile-intro-wrapper">
			<Intro />
		</div>
		<Timeline {weeks} />
	</div>
	<div class="divider" />
	<div class="page-wrapper">
		<div class="page-nav-wrapper">
			<MainNav />
		</div>
		<slot />
	</div>
</main>

<Footer />

<style lang="postcss">
	.nav-wrapper {
		@media (--md-n-above) {
			display: none;
		}
	}

	main {
		min-height: calc(100vh);
		display: grid;
		grid-template-columns: 100vw 1px 1fr;
		position: relative;
		overflow-x: hidden;

		@media (--md-n-above) {
			grid-template-columns: 3fr 1px 2fr;
		}

		@media (--xl-n-above) {
			grid-template-columns: 1fr 1px 1fr;
		}
	}

	.timeline-wrapper {
		position: sticky;
		top: 0;
		height: calc(100vh);
		overflow-y: scroll;
		padding-inline: var(--spacing);

		@media (--md-n-above) {
			padding-block-start: 2rem;
		}
	}

	.mobile-intro-wrapper {
		margin-block-end: 12rem;

		@media (--md-n-above) {
			display: none;
		}
	}

	.divider {
		margin-block: var(--spacing);
		border-right: var(--border);
		display: none;

		@media (--md-n-above) {
			display: block;
		}
	}

	.page-nav-wrapper {
		display: none;

		@media (--md-n-above) {
			display: block;
		}
	}
</style>
