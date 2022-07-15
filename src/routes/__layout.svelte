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
	import Footer from '$components/Footer.svelte'
	import Header from '$components/Header.svelte'
	import Intro from '$components/Intro.svelte'

	export let weeks: Week[]
</script>

<div class="header-wrapper fixed-header">
	<Header />
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
		<div class="page-header-wrapper fixed-header">
			<Header />
		</div>
		<slot />
	</div>
</main>

<Footer />

<style lang="postcss">
	.fixed-header {
		position: fixed;
		right: 0;
		top: 0;
		z-index: 2;
	}

	.header-wrapper {
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
		margin-top: 2rem;
		margin-bottom: 6rem;

		@media (--md-n-above) {
			display: none;
		}
	}

	.homepage-header-wrapper {
		width: 50%;
		margin-block-end: var(--size-5);
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

	.page-header-wrapper {
		display: none;

		@media (--md-n-above) {
			display: block;
		}
	}
</style>
