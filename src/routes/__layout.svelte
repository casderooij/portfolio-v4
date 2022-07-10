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

<div class="flex flex-col h-screen">
	<header class="flex justify-between py-2 mx-4 border-b border-black">
		<a href="/">/</a>
		<ul class="flex gap-2">
			<li><a class="bg-white px-4 py-1 rounded-full" href="/info">info</a></li>
			<li><a class="bg-white px-4 py-1 rounded-full" href="/projects">projects</a></li>
		</ul>
	</header>

	<div class="flex-1 flex">
		<div class="flex-1 overflow-y-scroll px-4 bg-yellow-400">
			<Timeline {weeks} />
		</div>
		<div class="border-l border-black" />
		<div class="flex-1 overflow-y-scroll p-4">
			<slot />
		</div>
	</div>
</div>

<footer class="mx-4 py-2 border-t border-black">footer</footer>

<style lang="postcss">
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: var(--gray-4);
	}
</style>
