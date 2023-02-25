import * as prismic from '@prismicio/client';
import * as helpers from '@prismicio/helpers';

const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function load() {
	const entries = await client.getAllByType('update', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	});
	return {
		entries: entries.map(entry => {
			return {
				id: entry.uid,
				timestamp: entry.first_publication_date,
				text: helpers.asHTML(entry.data.text),
			};
		}),
	};
}
