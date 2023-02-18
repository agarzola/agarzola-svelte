<script context='module'>
    // No client-side hydration needed on this page.
    export const hydrate = false;
    // This page can be pre-rendered.
    export const prerender = true;

</script>

<script>
	export let data;
</script>

<style>
	main p:first-of-type {
		margin-top: 2rem;
	}
</style>

<main>
	<h1>Hello. I’m&nbsp;Alfonso.</h1>
	<img src='/portrait-small.jpg' srcset='/portrait-small.jpg 640w, /portrait-large.jpg 1080w' alt='A black and white portrait of me taking a selfie with my smartphone on a mirror with an ornate frame. A modern pendant lamp is visible in the top right corner, and the edges of a fiddle leaf fig tree near the lower right corner.' />
	<p>
	This is where I put the things I’m interested in. You should check out <a class='highlighted' href='/journal'>my journal</a>, where I have rambled exactly { data.total_journal_entries } time{ data.total_journal_entries !== 'one' ? 's' : '' } —with varying degrees of eloquence— about something or other.
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
