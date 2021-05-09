<script context='module'>
	// This page can be pre-rendered.
	export const prerender = true;

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
	import JournalEntryHeading from '$lib/JournalEntryHeading.svelte';
	import Masthead from '$lib/Masthead.svelte';
</script>

<Masthead>
	<p class="smaller-text">Hello. I’m Alfonso and this is my <a class="highlighted" href="/journal">journal</a>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</Masthead>

<main>
	<JournalEntryHeading
		link={ false }
		permalink={ true }
		slug={ entry.slugs[0] }
		timestamp={ entry.last_publication_date }
		title={ PrismicDom.RichText.asText(entry.data.title) }>
		<h1 slot='title'>{@html PrismicDom.RichText.asText(entry.data.title) }</h1>
	</JournalEntryHeading>

	{#each renderedSections as section}
		{@html section}
	{/each}
</main>
