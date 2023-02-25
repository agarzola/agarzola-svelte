<script>
	import entryDateTime from '$lib/entry-date-time';
	export let label;
	export let path;
	export let permalink;
	export let showTime = false;
	export let timestamp;
</script>

<style>
	.journal-entry-meta {
		display: flex;
		justify-content: space-between;
		margin-top: 0;
		font-weight: bold;
	}
		.journal-entry-meta * {
			margin-top: 0;
		}

	.journal-entry-label {
		flex-grow: 1;
		font-size: 0.6rem;
		font-weight: bold;
		text-transform: uppercase;
		color: var(--muted);
	}

	.journal-entry-permalink {
		width: 1rem;
		height: 1rem;
		border-radius: 2px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 0.2em;
		background-color: var(--subtle);
		font-size: 0.6rem;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
		transition-duration: 0.2s;
		transition-property: background-color, color;
	}
		.journal-entry-permalink:focus, .journal-entry-permalink:hover {
			color: var(--dark);
			background-color: var(--highlight);
		}

	.journal-entry-time {
		flex-grow: 100;
		font-size: 0.6rem;
		text-transform: uppercase;
		color: var(--muted);
	}
</style>
<div class='journal-entry-meta'>
	{#if label}
		<span class='journal-entry-label'>{label}:</span>
	{/if}

	<time class='journal-entry-time' datetime='{timestamp}'>
		{entryDateTime(timestamp).date}
		{#if showTime}
			at {entryDateTime(timestamp).time}
		{/if}
	</time>

	{#if permalink}
		<a class='journal-entry-permalink' title='Permanent link to this {label} entry' href='{path}'>
			#
		</a>
	{/if}
</div>
