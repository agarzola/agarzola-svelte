<script>
	import '../app.css';
	import {
		description,
		modifiedTime,
		publishedTime,
		title,
		type
	} from '$lib/store';
</script>

<svelte:head>
	<meta name="description" content="{ $description }" />

	<meta property="og:description" content="{ $description }" />
	<meta property="og:image" content="https://agarzola.com/portrait-large.jpg" />
	<meta property="og:image:secure_url" content="https://agarzola.com/portrait-large.jpg" />
	<meta property="og:site_name" content="agarzola.com" />
	<meta property="og:title" content="{ $title }" />
	<meta property="og:type" content="{ $type }" />
	{#if $type === 'article'}
		<meta property="article:author" content="Alfonso Gómez-Arzola" />
		{#if $modifiedTime}
			<meta property="article:modified_time" content="{ $modifiedTime }" />
		{/if}
		<meta property="article:published_time" content="{ $publishedTime }" />
	{/if}

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<title>{ $title }</title>
</svelte:head>

<slot />
