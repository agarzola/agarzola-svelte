<script>
	export let data;
	import JournalEntryHeading from '$lib/JournalEntryHeading.svelte';
	import Masthead from '$lib/Masthead.svelte';
	import { description, title, type } from '$lib/store';
	description.set('Non-random thoughts on possibly random topics.');
	title.set('The Journal of');
	type.clear();
</script>

<Masthead>
	<p>Hello. I’m Alfonso and this is my <span class="defined-term" title="That’s a fancy word for “diary” or, more recently, “blog”.">journal</span>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</Masthead>

<main>
	<h1>Journal.</h1>
	{#each data.entries as entry}
	<div class='journal-entry'>
		<JournalEntryHeading
			link={ true }
			slug={ entry.slug }
			timestamp={ entry.timestamp }
			title={ entry.title } />
		{@html entry.summaryHtml}
	</div>
	{/each}
</main>
