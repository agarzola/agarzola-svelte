<script>
	export let data;
	import Masthead from '$lib/Masthead.svelte';
	import ContentHeadingMeta from '$lib/ContentHeadingMeta.svelte';
	import { description, title, type } from '$lib/store';
	description.set('A logbook of noteworthy changes made to this site.');
	title.set('Updates on agarzola.com, the website of');
	type.clear();
</script>

<style>
	.update {
		margin-top: 2rem;
	}
</style>

<Masthead>
	<p>Hello. I’m Alfonso and this is <a href='/' class='highlighted'>my website</a>.</p>
</Masthead>

<main>
	<h1>Website Updates.</h1>
	<p>A logbook of noteworthy changes made to this site.</p>
	<hr />
	{#each data.entries as entry}
		<div class='update' id='{entry.id}'>
			<ContentHeadingMeta
					label='update'
					path={`/updates#${entry.id}`}
					permalink={true}
					showTime={true}
					timestamp={entry.timestamp} />
			{@html entry.text}
		</div>
	{/each}
</main>
