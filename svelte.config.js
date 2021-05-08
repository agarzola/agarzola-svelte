import netlify from '@sveltejs/adapter-netlify';
import { readFileSync } from 'fs';
const pkg = JSON.parse( readFileSync(new URL('package.json', import.meta.url), 'utf8') );

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// Vite configuration.
		vite: {
			optimizeDeps: {
				include: Object.keys(pkg.dependencies || {}),
			},
		},
	},
};

export default config;
