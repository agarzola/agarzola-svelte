<script>
	import '../app.css';
	import { description, title } from '$lib/store';
</script>

<svelte:head>
	<meta name="description" content="{ $description }" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<title>{ $title }</title>
</svelte:head>

<slot />
