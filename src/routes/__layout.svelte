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

<div class="nav-wrapper fixed-nav">
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
		<div class="page-nav-wrapper fixed-nav">
			<MainNav />
		</div>
		<slot />
	</div>
</main>

<Footer />

<style lang="postcss">
	.fixed-nav {
		position: fixed;
		right: 0;
		top: 0;
		z-index: 2;
	}

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
	}

	.mobile-intro-wrapper {
		margin-top: 3rem;
		margin-bottom: 8rem;

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
