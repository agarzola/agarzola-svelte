<script>
	import ContentHeadingMeta from '$lib/ContentHeadingMeta.svelte';
	export let label;
	export let level = 'h2';
	export let link;
	export let path;
	export let permalink;
	export let showTime;
	export let slug;
	export let timestamp;
	export let title;
</script>

<style>
	.journal-entry-title {
		margin-top: 0.3em;
		line-height: 1.2;
	}
</style>

<ContentHeadingMeta
		label={label}
		path={path}
		permalink={permalink}
		showTime={showTime}
		slug={slug}
		timestamp={timestamp} />

{#if link}
	<a href='{ path }'>
		<svelte:element this={ level } class='journal-entry-title'>{ title }</svelte:element>
	</a>
{:else}
	<svelte:element this={ level } class='journal-entry-title'>{ title }</svelte:element>
{/if}
