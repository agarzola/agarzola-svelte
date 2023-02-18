<script>
	export let data;
	import JournalEntryHeading from '$lib/JournalEntryHeading.svelte';
	import Masthead from '$lib/Masthead.svelte';
	import { description, title } from '$lib/store';
	description.set(data.entry.summary);
	title.set(`${data.entry.title}, a post by`);
</script>

<Masthead>
	<p>Hello. I’m Alfonso and this is my <a class="highlighted" href="/journal">journal</a>. Want to learn more about me? <a class='highlighted' href="/">Visit&nbsp;my&nbsp;homepage.</a></p>
</Masthead>

<main>
	<JournalEntryHeading
		link={ false }
		permalink={ true }
		slug={ data.entry.slug }
		timestamp={ data.entry.timestamp }
		title={ data.entry.title }>
		<h1 slot='title'>{ data.entry.title }</h1>
	</JournalEntryHeading>

	{#each data.renderedSections as section}
		{#if section.label === 'aside'}
			<aside>
				{@html section.html}
			</aside>
		{:else if section.label === 'blockquote'}
			<blockquote>
				{@html section.html}
			</blockquote>
		{:else if section.label === 'hr'}
			<hr />
		{:else}
			{@html section.html}
		{/if}
	{/each}
</main>
