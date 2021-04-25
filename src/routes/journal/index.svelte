<script context='module'>
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
	import { DateTime } from 'luxon';
	export let entries;
	function entryDateTime(string) {
		const full = DateTime.fromISO(string);
		const date = full.toISODate();
		const time = full.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET);
		return { date, time };
	}
</script>

<style>
	time {
		font-size: 0.8rem;
		color: var(--muted);
	}
</style>

<aside class='masthead-notice'>
	<p>Hello. I’m Alfonso and this is my <span class="defined-term" title="That’s a fancy word for “diary” or, more recently, “blog”.">journal</span>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</aside>

<main>
	<h1>Journal.</h1>
	{#each entries.results as entry}
	<div class='journal-entry'>
		<a href='/journal/{ entry.slugs[0] }'>
			<h2>{ PrismicDom.RichText.asText(entry.data.title) }</h2>
		</a>
		<time datetime='{ entry.last_publication_date }'>
			{ entryDateTime(entry.last_publication_date).date } at
			{ entryDateTime(entry.last_publication_date).time }
		</time>
		{@html PrismicDom.RichText.asHtml(entry.data.summary)}
	</div>
	{/each}
</main>
