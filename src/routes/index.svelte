<script context='module'>
	// No client-side JavaScript needed on this page.
	export const hydrate = false;
	// This page can be pre-rendered.
	export const prerender = true;
	export const router = false;
</script>

<main>
	<h1>Hello. I’m&nbsp;Alfonso.</h1>
	<img src='/portrait-small.jpg' srcset='/portrait-small.jpg 640w, /portrait-large.jpg 1080w' alt='A black and white photo of me taking a picture of myself with my smartphone on a mirror with an ornate frame. A modern pendant lamp is visible in the top right corner, and the edges of a fiddle leaf fig tree near the lower right corner.' />
	<p>
	I think I spend too much time online and, strangely, creating a new website seems like a reasonable way of addressing this problem. Truth be told, I’m already regretting&nbsp;it.
	</p>
	<p>
	I might do something useful with this someday. In the meantime, you can find me on <a rel='external' href='https://www.linkedin.com/in/agarzola/'>LinkedIn</a>, <a rel='external' href='https://instagram.com/agarzola'>Instagram</a>, and —sadly— the absolute pit of despair that is <a rel='external' href='https://twitter.com/agarzola'>Twitter</a>. You should follow me on none of&nbsp;these.
	</p>
	<p>
	If you happen to have a good reason to send me an encrypted message, my public key is available on <a rel='external' href='https://keybase.io/alfonso'>Keybase</a>. You can reach out to me using their messaging system or <a rel='external' href='mailto:alfonso@agarzola.com'>email</a> your encrypted message to me like in the olden times.
	</p>
	<p>
	Unencrypted messages are also acceptable, although admittedly a little less&nbsp;fun.
	</p>
</main>

<style>
	main {
		text-align: justify;
		max-width: 20rem;
		margin: 0 auto;
		padding: 0 1rem 1rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 100;
	}

	p {
		margin-top: 0.5rem;
		text-indent: 1.4rem;
	}

	p:first-of-type {
		margin-top: 2rem;
		text-indent: 0;
	}

	p:last-of-type:after {
		content: '❡';
		display: block;
		margin-top: 1.5rem;
		font-size: 1.4rem;
		text-align: center;
		text-indent: 0;
	}

	img {
		display: block;
		margin: 2rem auto 0;
		width: 100%;
		height: auto;
		max-width: 180rem;
		border-radius: 3px;
		box-shadow: -8px 8px var(--dark), -10px 10px var(--subtle);
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
