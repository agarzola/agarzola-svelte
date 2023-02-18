import * as prismic from '@prismicio/client';
import { ToWords } from 'to-words';

const toWords = new ToWords();
const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function load() {
	const entries = await client.getAllByType('journal_entry', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
	});
	const total_journal_entries = toWords.convert(entries.length).toLowerCase();
	return { total_journal_entries };
}
