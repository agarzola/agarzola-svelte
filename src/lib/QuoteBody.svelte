<script>
	export let attribution;
	export let citation;
	export let text;
	export let url;
</script>

<style>
	.quote-container {
		margin-left: 0;
		margin-right: 0;
	}

	.quote-text {
		margin: 0;
		padding-left: 2rem;
		border-left: 6px solid var(--subtle);
	}

	.quote-caption {
		padding-left: 2rem;
	}
</style>

<figure class='quote-container'>
	<blockquote class='quote-text' cite='{url}'>
		{@html text}
	</blockquote>

	<figcaption class='quote-caption'>
		{#if attribution && !citation}
			{#if url}
				&mdash; <a class='highlighted' href='{ url }'>{attribution}</a>
			{:else}
				&mdash; {attribution}
			{/if}
		{:else if attribution && citation}
			{#if url}
				&mdash; {attribution}, <cite><a class='highlighted' href='{ url }'>{citation}</a></cite>
			{:else}
				&mdash; {attribution}, <cite>{citation}</cite>
			{/if}
		{:else if !attribution && citation}
			{#if url}
				<cite><a class='highlighted' href='{ url }'>{citation}</a></cite>
			{:else}
				<cite>{citation}</cite>
			{/if}
		{/if}
	</figcaption>
</figure>
