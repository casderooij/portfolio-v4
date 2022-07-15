<script lang="ts">
	export let href: string
	export let label: string
</script>

<a {href} rel="external">
	<span>{label}</span>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		width="16"
		height="16"
		viewBox="0 0 16 16"
		preserveAspectRatio="xMidYMid meet"
		aria-hidden="true"
	>
		<path
			d="M1.293 13.293.586 14 2 15.414l.707-.707-1.414-1.414ZM14 2h1V1h-1v1ZM2.707 14.707l12-12-1.414-1.414-12 12 1.414 1.414ZM13 2v8h2V2h-2Zm1-1H6v2h8V1Z"
			fill="currentColor"
		/>
	</svg>
</a>

<style lang="postcss">
	a {
		position: relative;
		margin-right: 0.8em;
		text-decoration: none;
	}

	svg {
		position: absolute;
		width: 0.6em;
		height: 0.7em;
		top: -0.2em;
		right: -0.8em;
	}
</style>
