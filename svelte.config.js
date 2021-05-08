import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			pages: [ '*' ],
		},
		vite: {
			ssr: {
				noExternal: [ 'luxon', 'to-words' ],
			},
		},
	},
};

export default config;
