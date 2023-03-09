import * as helpers from '@prismicio/helpers';

export function renderContent(raw) {
	switch (raw.type) {
		case 'journal_entry':
			return renderJournalEntry(raw);
		case 'quote':
			return renderQuote(raw);
		case 'update':
			return renderUpdate(raw);
	}
}

function renderJournalEntry(raw) {
	const renderedBody = raw.data.body
		.map((slice) => {
			switch (slice.slice_label) {
				case 'aside':
					return `<aside>${helpers.asHTML(slice.primary.text)}</aside>`;
				case 'blockquote':
					return `<blockquote>${helpers.asHTML(slice.primary.text)}</blockquote>`;
				case 'hr':
					return '<hr />';
				default:
					return helpers.asHTML(slice.primary.text);
			}
		}).join('');
	return {
		entry: {
			modifiedTime: raw.last_publication_date,
			path: `/journal/${raw.uid}`,
			publishedTime: raw.first_publication_date,
			slug: raw.uid,
			summary: helpers.asText(raw.data.summary),
			timestamp: raw.first_publication_date,
			title: helpers.asText(raw.data.title),
		},
		renderedBody,
	};
}

function renderQuote(raw) {
	return {
		entry: {
			attribution: helpers.asText(raw.data.attribution),
			citation: helpers.asText(raw.data.citation),
			modifiedTime: raw.last_publication_date,
			path: `/journal/quote/${raw.uid}`,
			publishedTime: raw.first_publication_date,
			slug: raw.uid,
			summary: helpers.asText(raw.data.summary),
			timestamp: raw.first_publication_date,
			title: helpers.asText(raw.data.title),
			text: helpers.asHTML(raw.data.quote_text),
			url: raw.data.url.url,
		},
	};
}

function renderUpdate(raw) {
}
