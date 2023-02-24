<script>
	import ContentHeading from '$lib/ContentHeading.svelte';
	export let level = 'h2';
	export let link;
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
		permalink={permalink}
		showTime={showTime}
		slug='quote/{slug}'
		timestamp={timestamp}
		title={title} />

