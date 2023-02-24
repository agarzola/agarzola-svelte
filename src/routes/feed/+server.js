import * as prismic from '@prismicio/client';
import * as helpers from '@prismicio/helpers';
import { Feed } from 'feed';

const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function GET() {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=600',
		'Content-Type': 'application/xml',
	};
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

	const feed = new Feed({
		title: 'Alfonso Gómez-Arzola’s Online Feed',
		description: 'A comprehensive feed of new content and noteworthy updates on agarzola.com',
		id: 'https://agarzola.com/',
		link: 'https://agarzola.com/',
		image: 'https://agarzola.com/portrait-large.jpg',
		favicon: 'https://agarzola.com/favicon-32x32.png',
		copyright: 'All rights reserved',
		updated: new Date(query.results[0].first_publication_date),
		generator: 'SvelteKit, via Feed for Node.js',
		feedLinks: {
			atom: 'https://agarzola.com/feed',
		},
		author: {
			name: 'Alfonso Gómez-Arzola',
			email: 'alfonso@agarzola.com',
			link: 'https://agarzola.com/',
		},
	});

	query.results.forEach(result => {
		feed.addItem({
			date: new Date(result.last_publication_date),
			description: helpers.asText(result.data.summary),
			id: buildLink(result),
			link: buildLink(result),
			title: helpers.asText(result.data.title),
		});
	});

	feed.addCategory('Personal feed');

	return new Response(feed.atom1(), {
		status: 200,
		headers: new Headers({
			'Cache-Control': 'max-age=0, s-maxage=600',
			'Content-Type': 'application/xml',
		}),
	});
}

function buildLink(result) {
	let segments;
	switch (result.type) {
		case 'journal_entry':
			segments = 'journal/';
			break;
		case 'quote':
			segments = 'journal/quote/';
			break;
		case 'update':
			segments = 'updates#';
			break;
	}
	return `https://agarzola.com/${segments}${result.uid}`;
}
