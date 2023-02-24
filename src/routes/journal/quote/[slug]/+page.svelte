<script>
	export let data;
	import QuoteHeading from '$lib/QuoteHeading.svelte';
	import Masthead from '$lib/Masthead.svelte';
	import { description, modifiedTime, publishedTime, title, type } from '$lib/store';
	modifiedTime.set(data.entry.modifiedTime);
	publishedTime.set(data.entry.publishedTime);
	description.set(data.entry.summary);
	title.set(`${data.entry.title}, a quote shared by`);
	type.set('article');
</script>

<style>
	.quote-container {
		margin-left: 0;
		margin-right: 0;
	}

	.quote-text {
		margin: 0;
		padding-left: 2rem;
		border-left: 6px solid var(--subtle);
	}

	.quote-caption {
		padding-left: 2rem;
	}
</style>

<Masthead>
	<p>Hello. I’m Alfonso and this is my <a class="highlighted" href="/journal">journal</a>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</Masthead>

<main>
	<QuoteHeading
		label='entry'
		level='h1'
		link={ false }
		permalink={ true }
		slug={ data.entry.slug }
		timestamp={ data.entry.timestamp }
		title={ data.entry.title }>
	</QuoteHeading>

	<figure class='quote-container'>
		<blockquote class='quote-text' cite='{data.entry.url}'>
			{@html data.entry.text}
		</blockquote>

		<figcaption class='quote-caption'>
			{#if data.entry.attribution && !data.entry.citation}
				{#if data.entry.url}
					&mdash; <a class='highlighted' href='{ data.entry.url }'>{data.entry.attribution}</a>
				{:else}
					&mdash; {data.entry.attribution}
				{/if}
			{:else if data.entry.attribution && data.entry.citation}
				{#if data.entry.url}
					&mdash; {data.entry.attribution}, <cite><a class='highlighted' href='{ data.entry.url }'>{data.entry.citation}</a></cite>
				{:else}
					&mdash; {data.entry.attribution}, <cite>{data.entry.citation}</cite>
				{/if}
			{:else if !data.entry.attribution && data.entry.citation}
				{#if data.entry.url}
					<cite><a class='highlighted' href='{ data.entry.url }'>{data.entry.citation}</a></cite>
				{:else}
					<cite>{data.entry.citation}</cite>
				{/if}
			{/if}
		</figcaption>
	</figure>
</main>
