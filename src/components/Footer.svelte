<script>
	import ExternalLink from './ExternalLink.svelte'
</script>

<footer>
	<p>Cas de Rooij</p>
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
		margin-inline: var(--size-2);
		padding-block: var(--size-2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: var(--border);
	}

	ul {
		display: flex;
		gap: var(--size-4);
	}

	img {
		display: block;
		width: var(--size-5);
	}
</style>
