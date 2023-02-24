import * as prismic from '@prismicio/client';
import * as helpers from '@prismicio/helpers';

const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function load({ params }) {
	const entry = await client.getByUID('quote', params.slug);
	if (!entry) return;
	return {
		entry: {
			attribution: helpers.asText(entry.data.attribution),
			citation: helpers.asText(entry.data.citation),
			modifiedTime: entry.last_publication_date,
			publishedTime: entry.first_publication_date,
			slug: entry.uid,
			summary: helpers.asText(entry.data.summary),
			timestamp: entry.first_publication_date,
			title: helpers.asText(entry.data.title),
			text: helpers.asHTML(entry.data.quote_text),
			url: entry.data.url.url,
		},
	};
}
