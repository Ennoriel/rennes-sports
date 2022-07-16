<script>
	import { RELEASES } from '$lib/data/releases';
</script>

<main>
	<h1>Nouveautés</h1>

	{#each RELEASES as release}
		<h2>{release.date}</h2>
		<ul>
			{#each release.updates as update}
				<li>{update}</li>
			{/each}
		</ul>
	{/each}
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;
	}
</style>
