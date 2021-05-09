<script>
	import entryDateTime from '$lib/entry-date-time';
	export let link;
	export let permalink;
	export let slug;
	export let timestamp;
	export let title;
</script>

<style>
	time {
		font-size: 0.6rem;
		text-transform: uppercase;
		color: var(--muted);
	}

	.permalink {
		font-size: 0.6rem;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--dark);
		background-color: var(--muted);
		padding: 0 0.2rem;
		border-radius: 2px;
		transition-duration: 0.2s;
		transition-property: background-color;
	}
		.permalink:focus, .permalink:hover {
			background-color: var(--highlight);
		}
</style>

{#if link}
<a href='/journal/{ slug }'>
	<slot name='title'><h2>{ title }</h2></slot>
</a>
{:else}
<slot name='title'><h2>{ title }</h2></slot>
{/if}

<time datetime='{ timestamp }'>
	{ entryDateTime(timestamp).date } at
	{ entryDateTime(timestamp).time }
</time>

{#if permalink}
<a class='permalink' href='/journal/{ slug }'>
	Permalink
</a>
{/if}
