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
		predicates: [
			prismic.predicate.any('document.type', [
				'journal_entry', 'quote', 'update'
			]),
		],

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
		let content, title;
		switch (result.type) {
			case 'update':
				content = helpers.asHTML(result.data.text);
				title = `Website Update: ${new Date(result.first_publication_date)}`;
				break;
			case 'quote':
				content = helpers.asHTML(result.data.quote_text);
				title = `Quote: ${helpers.asText(result.data.title)}`
				break;
			default:
				content = buildJournalContentBody(result.data.body);
				title = helpers.asText(result.data.title);
		}
		feed.addItem({
			content,
			date: new Date(result.last_publication_date),
			description: result.type === 'update' ?
				helpers.asHTML(result.data.text) :
				helpers.asHTML(result.data.summary),
			id: buildLink(result),
			link: buildLink(result),
			title,
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

function buildJournalContentBody(slices) {
	return slices
		.map((slice) => {
			switch (slice.slice_type) {
				case 'body':
					return helpers.asHTML(slice.primary.text);
			}
		}).join('');
}
