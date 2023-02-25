import * as prismic from '@prismicio/client';
import * as helpers from '@prismicio/helpers';

const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function load() {
	const query = await client.get({
		predicates: [
			prismic.predicate.any('document.type', [
				'journal_entry', 'quote'
			]),
		],
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	});

	return {
		entries: query.results.map((entry) => {
			return {
				path: entry.type === 'quote' ? `/journal/quote/${entry.uid}` : `/journal/${entry.uid}`,
				slug: entry.uid,
				summaryHtml: helpers.asHTML(entry.data.summary),
				timestamp: entry.first_publication_date,
				title: helpers.asText(entry.data.title),
				type: entry.type,
			};
		}),
	};
}
