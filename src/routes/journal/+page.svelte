<script>
	export let data;
	import JournalEntryHeading from '$lib/JournalEntryHeading.svelte';
	import Masthead from '$lib/Masthead.svelte';
	import QuoteHeading from '$lib/QuoteHeading.svelte';
	import { description, title, type } from '$lib/store';
	description.set('Non-random thoughts on possibly random topics. Also quotes.');
	title.set('The Journal of');
	type.clear();
</script>

<style>
	.journal-type {
		margin-top: 2rem;
	}
</style>

<Masthead>
	<p>Hello. I’m Alfonso and this is my <span class="defined-term" title="That’s a fancy word for “diary” or, more recently, “blog”.">journal</span>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</Masthead>

<main>
	<h1>Journal.</h1>
	<p>Where I think my ideas out loud and share quotes.</p>
	<hr />
	{#each data.entries as entry}
	<div class="journal-type journal-type--{ entry.type }">
		{#if entry.type === 'journal_entry'}
			<JournalEntryHeading
					link={ true }
					path={ entry.path }
					timestamp={ entry.timestamp }
					title={ entry.title } />
			{@html entry.summaryHtml}
		{:else}
			<QuoteHeading
					link=true
					path={ entry.path }
					timestamp={ entry.timestamp }
					title={ entry.title } />
			{@html entry.summaryHtml}
		{/if}
	</div>
	{/each}
</main>
