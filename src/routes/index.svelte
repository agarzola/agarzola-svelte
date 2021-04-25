<script context='module'>
	// No client-side JavaScript needed on this page.
	export const hydrate = false;
	// This page can be pre-rendered.
	export const prerender = true;
	export const router = false;

	import { ToWords } from 'to-words';
	const toWords = new ToWords();
	import Prismic from '@prismicio/client';
	const Client = Prismic.client('https://agarzola.cdn.prismic.io/api/v2');
	import PrismicDom from 'prismic-dom';

	export async function load() {
		const entries = await Client.query(
			[ Prismic.Predicates.at('document.type', 'journal_entry') ],
			{ pageSize: 15, page: 1, orderings: '[my.journal_entry.date desc]' }
		);
		const total_journal_entries = toWords.convert(entries.results.length).toLowerCase();
		return { props: { total_journal_entries } };
	}
</script>

<script>
	export let total_journal_entries;
</script>

<style>
	main p:first-of-type {
		margin-top: 2rem;
	}
</style>

<main>
	<h1>Hello. I’m&nbsp;Alfonso.</h1>
	<img src='/portrait-small.jpg' srcset='/portrait-small.jpg 640w, /portrait-large.jpg 1080w' alt='A black and white photo of me taking a picture of myself with my smartphone on a mirror with an ornate frame. A modern pendant lamp is visible in the top right corner, and the edges of a fiddle leaf fig tree near the lower right corner.' />
	<p>
	This is where I put the things I’m interested in. You should check out <a class='highlighted' href='/journal'>my journal</a>, where I have rambled exactly { total_journal_entries } time{ total_journal_entries !== 'one' ? 's' : '' } —with varying degrees of eloquence— about something or other.
	</p>
	<p>
	You can also find me on <a class='highlighted' rel='external' href='https://www.linkedin.com/in/agarzola/'>LinkedIn</a>, <a class='highlighted' rel='external' href='https://instagram.com/agarzola'>Instagram</a>, and —sadly— the absolute pit of despair that is <a class='highlighted' rel='external' href='https://twitter.com/agarzola'>Twitter</a>. You should follow me on none of&nbsp;these.
	</p>
	<p>
	If you happen to have a good reason to send me an encrypted message, my public key is available on <a class='highlighted' rel='external' href='https://keybase.io/alfonso'>Keybase</a>. You can reach out to me using their messaging system or <a class='highlighted' rel='external' href='mailto:alfonso@agarzola.com'>email</a> your encrypted message to me like in the olden times.
	</p>
	<p>
	Unencrypted messages are also acceptable, although admittedly a little less&nbsp;fun.
	</p>
</main>
