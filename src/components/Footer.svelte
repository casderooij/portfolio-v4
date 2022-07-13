<script>
	import ExternalLink from './ExternalLink.svelte'
</script>

<footer>
	<ul>
		<li>
			<ExternalLink href="https://github.com/casderooij" label="github" />
		</li>
		<li>
			<ExternalLink href="https://www.instagram.com/cas_de_rooij/" label="instagram" />
		</li>
	</ul>
</footer>

<style lang="postcss">
	footer {
		margin-inline: var(--spacing);
		padding-block: var(--spacing);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-top: var(--border);
		text-transform: uppercase;
		font-size: var(--font-size-0);
	}

	ul {
		display: flex;
		gap: var(--size-4);
	}
</style>
