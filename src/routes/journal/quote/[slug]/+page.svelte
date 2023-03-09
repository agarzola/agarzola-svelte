<script>
	export let data;
	import QuoteBody from '$lib/QuoteBody.svelte';
	import QuoteHeading from '$lib/QuoteHeading.svelte';
	import Masthead from '$lib/Masthead.svelte';
	import { description, modifiedTime, publishedTime, title, type } from '$lib/store';
	modifiedTime.set(data.entry.modifiedTime);
	publishedTime.set(data.entry.publishedTime);
	description.set(data.entry.summary);
	title.set(`${data.entry.title}, a quote shared by`);
	type.set('article');
</script>

<Masthead>
	<p>Hello. I’m Alfonso and this is my <a class="highlighted" href="/journal">journal</a>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</Masthead>

<main>
	<QuoteHeading
			label='entry'
			level='h1'
			link={false}
			path={data.entry.path}
			permalink={true}
			showTime={true}
			slug={data.entry.slug}
			timestamp={data.entry.timestamp}
			title={data.entry.title}>
	</QuoteHeading>

	<QuoteBody
			attribution={data.entry.attribution}
			citation={data.entry.citation}
			text={data.entry.text}
			url={data.entry.url}>
	</QuoteBody>
</main>
