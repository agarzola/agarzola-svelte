<script context='module'>
	// This page can be pre-rendered.
	export const prerender = true;

	import Prismic from '@prismicio/client';
	const Client = Prismic.client('https://agarzola.cdn.prismic.io/api/v2');
	import PrismicDom from 'prismic-dom';

	export async function load() {
		const entries = await Client.query(
			[ Prismic.Predicates.at('document.type', 'journal_entry') ],
			{ pageSize: 15, page: 1, orderings: '[my.journal_entry.date desc]' }
		);
		return {
			props: {
				entries,
			},
		};
	}
</script>

<script>
	export let entries;
	import JournalEntryHeading from '$lib/components/JournalEntryHeading.svelte';
	import Masthead from '$lib/components/Masthead.svelte';
</script>

<Masthead>
	<p class="smaller-text">Hello. I’m Alfonso and this is my <span class="defined-term" title="That’s a fancy word for “diary” or, more recently, “blog”.">journal</span>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</Masthead>

<main>
	<h1>Journal.</h1>
	{#each entries.results as entry}
	<div class='journal-entry'>
		<JournalEntryHeading
			link={ true }
			slug={ entry.slugs[0] }
			timestamp={ entry.last_publication_date }
			title={ PrismicDom.RichText.asText(entry.data.title) } />
		{@html PrismicDom.RichText.asHtml(entry.data.summary)}
	</div>
	{/each}
</main>
