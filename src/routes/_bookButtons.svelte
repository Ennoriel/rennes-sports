<script>
	import Button from '$lib/component/atom/Button.svelte';
	import X from '$lib/component/svg/X.svelte';

	let pending = false;

	const variants = ['square', 'squarish', 'rounded'];
	const sizes = ['s', 'l'];
	const themes = ['primary', 'vibrant', 'secondary', 'transparent'];

	$: if (pending) setTimeout(() => (pending = false), 2000);
</script>

<table>
	<thead>
		<tr>
			<th colspan="2" />
			{#each themes as theme}
				<th>{theme}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each sizes as size}
			{#each variants as variant, variant_i}
				<tr>
					{#if variant_i === 0}
						<td rowspan="3">
							{size}
						</td>
					{/if}
					<td>{variant}</td>
					{#each themes as theme}
						<td>
							<Button
								{theme}
								{variant}
								{size}
								{pending}
								on:click={() => {
									pending = true;
								}}
							>
								Click me
							</Button>
							<Button
								{theme}
								{variant}
								{size}
								icon={X}
								{pending}
								on:click={() => {
									pending = true;
								}}
							/>
						</td>
					{/each}
				</tr>
			{/each}
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		margin: 16px 0;
	}
	table,
	th,
	td {
		border: 1px solid #ccc;
		border-collapse: collapse;
	}
	td,
	th {
		text-align: center;
		height: 50px;
		min-width: 25px;
	}
	td :global(button) {
		margin: auto;
		vertical-align: middle;
	}
</style>
