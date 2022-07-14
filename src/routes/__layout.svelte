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
	import HomePageHeader from '$components/HomePageHeader.svelte'
	import Footer from '$components/Footer.svelte'
	import Header from '$components/Header.svelte'

	export let weeks: Week[]
</script>

<Header />

<main>
	<div class="timeline-wrapper">
		<div class="homepage-header-wrapper">
			<HomePageHeader />
		</div>
		<Timeline {weeks} />
	</div>
	<div class="divider" />
	<div class="page-wrapper">
		<slot />
	</div>
</main>

<Footer />

<style lang="postcss">
	main {
		min-height: calc(100vh - var(--header-height));
		scroll-margin-top: var(--header-height);
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
		height: calc(100vh - var(--header-height));
		overflow-y: scroll;
		padding-block-start: var(--spacing);
		padding-inline: var(--spacing);
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
</style>
