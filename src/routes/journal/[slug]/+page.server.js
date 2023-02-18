import * as prismic from '@prismicio/client';
import * as helpers from '@prismicio/helpers';

const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function load({ params }) {
	const entry = await client.getByUID('journal_entry', params.slug);
	if (!entry) return;
	const renderedSections = entry.data.body.map((slice) => {
		switch (slice.slice_type) {
			case 'body':
				return {
					html: helpers.asHTML(slice.primary.text),
					label: slice.slice_label,
				};
		}
	});
	return {
		renderedSections,
		entry: {
			slug: entry.slugs[0],
			summary: helpers.asText(entry.data.summary),
			timestamp: entry.first_publication_date,
			title: helpers.asText(entry.data.title),
		},
	};
}
