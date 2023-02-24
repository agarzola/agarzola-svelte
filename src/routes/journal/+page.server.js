import * as prismic from '@prismicio/client';
import * as helpers from '@prismicio/helpers';

const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function load() {
	const query = await client.get({
		graphQuery: `
			{
				quote {
					...quoteFields
				}
				journal_entry {
					...journal_entryFields
				}
			}
		`,

		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	});
	console.log(query.results);
	return {
		entries: query.results.map((entry) => {
			return {
				slug: entry.uid,
				summaryHtml: helpers.asHTML(entry.data.summary),
				timestamp: entry.first_publication_date,
				title: helpers.asText(entry.data.title),
				type: entry.type,
			};
		}),
	};
}
