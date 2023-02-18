import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		// default options are shown
		adapter: adapter({
			// If true, will create a Netlify Edge Function rather than using
			// standard Node-based functions.
			edge: false,

			// If true, will split your app into multiple functions instead of
			// creating a single one for the entire app. If `edge` is true, this
			// option cannot be used.
			split: false,
		}),
	},
};
