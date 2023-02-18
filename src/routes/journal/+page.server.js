import * as prismic from '@prismicio/client';
import * as helpers from '@prismicio/helpers';

const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function load() {
	const entries = await client.getAllByType('journal_entry', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	});
	return {
		entries: entries.map((entry) => {
			return {
				slug: entry.slugs[0],
				timestamp: entry.first_publication_date,
				title: helpers.asText(entry.data.title),
				summaryHtml: helpers.asHTML(entry.data.summary),
			};
		}),
	};
}
