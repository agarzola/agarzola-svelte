import * as prismic from '@prismicio/client';
import * as helpers from '@prismicio/helpers';
import { renderContent } from '$lib/render-content';

const client = prismic.createClient('https://agarzola.cdn.prismic.io/api/v2');

export async function load({ params }) {
	const entry = await client.getByUID('quote', params.slug);
	if (!entry) return;
	return renderContent(entry);
}
