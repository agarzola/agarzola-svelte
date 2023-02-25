<script>
	import ContentHeading from '$lib/ContentHeading.svelte';
	export let level = 'h2';
	export let link;
	export let path;
	export let permalink;
	export let showTime = false;
	export let slug;
	export let timestamp;
	export let title;
</script>

<ContentHeading
		label='quote'
		level={level}
		link={link}
		path={path}
		permalink={permalink}
		showTime={showTime}
		slug={slug}
		timestamp={timestamp}
		title={title} />

