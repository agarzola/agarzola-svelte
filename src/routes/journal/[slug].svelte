<script context='module'>
	import Prismic from '@prismicio/client';
	const Client = Prismic.client('https://agarzola.cdn.prismic.io/api/v2');
	import PrismicDom from 'prismic-dom';

	export async function load({ page }) {
		const entry = await Client.getByUID('journal_entry', page.params.slug);
		if (!entry) return;
		const renderedSections = entry.data.body.map(slice => {
			switch (slice.slice_type) {
				case 'body': return PrismicDom.RichText.asHtml(slice.primary.text);
			}
		});
		return {
			props: {
				renderedSections,
				entry,
			},
		};
	}
</script>

<script>
	export let entry, renderedSections;
	import entryDateTime from '$lib/entry-date-time';
</script>

<style>
	.permalink {
		font-size: 0.6rem;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--dark);
		background-color: var(--muted);
		padding: 0 0.2rem;
		border-radius: 2px;
		transition-duration: 0.2s;
		transition-property: background-color;
	}
		.permalink:focus, .permalink:hover {
			background-color: var(--highlight);
		}
</style>

<aside class='masthead-notice'>
	<p>Hello. I’m Alfonso and this is my <a class="highlighted" href="/journal">journal</a>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</aside>

<main>
	<h1>{@html PrismicDom.RichText.asText(entry.data.title) }</h1>
	<time datetime='{ entry.last_publication_date }'>
		{ entryDateTime(entry.last_publication_date).date } at
		{ entryDateTime(entry.last_publication_date).time }
	</time>
	<a class='permalink' href='/journal/{ entry.uid }'>
		Permalink
	</a>
	{#each renderedSections as section}
		{@html section}
	{/each}
</main>
