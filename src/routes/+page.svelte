<script>
	export let data;
	import { description, title, type } from '$lib/store';
	description.clear();
	title.clear();
	type.clear();
</script>

<style>
	main > p:first-of-type {
		margin-top: 2rem;
	}
</style>

<main>
	<h1>Hello. I’m&nbsp;Alfonso.</h1>
	<img src='/portrait-small.jpg' srcset='/portrait-small.jpg 640w, /portrait-large.jpg 1080w' alt='A black and white portrait of me taking a selfie with my smartphone on a mirror with an ornate frame. A modern pendant lamp is visible in the top right corner, and the edges of a fiddle leaf fig tree near the lower right corner.' />
	<p>
	This is where I put the things I’m interested in. You should check out <a class='highlighted' href='/journal'>my journal</a>, where I have rambled about one thing or another exactly { data.total_journal_entries } time{ data.total_journal_entries !== 'one' ? 's' : '' } —with varying degrees of eloquence— and where I sometimes share noteworthy quotes.
	</p>
	<p>
	You can follow me on <a class='highlighted' rel='external me' href='https://mastodon.cloud/@agarzola'>Mastodon</a> and I can also be found on <a class='highlighted' rel='external me' href='https://www.linkedin.com/in/agarzola/'>LinkedIn</a> if you want to connect with me professionally.
	</p>
	<p>
	If you happen to have a good reason to send me an encrypted message, my public key is available on <a class='highlighted' rel='external me' href='https://keybase.io/alfonso'>Keybase</a>. You can reach out to me using their messaging system or <a class='highlighted' rel='external' href='mailto:alfonso@agarzola.com'>email</a> your encrypted message to me like in the olden times.
	</p>
	<p>
	Unencrypted messages are also acceptable, although admittedly a little less&nbsp;fun.
	</p>

	<aside>
		<p>You like feeds? I publish an <a href='/feed' class='highlighted'>Atom feed</a> that gets updated with new content and occasional site updates.</p>
	</aside>
</main>
