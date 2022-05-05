<script lang="ts">
	import Link from '$lib/component/atom/Link.svelte';

	export let name: string;
	export let description: string;
	export let imgSrc: string;
	export let links: Array<{ label: string; href: string }>;
</script>

<div class="user-card">
	<img src={imgSrc} alt={name} />
	<div class="user-details">
		<h2>{name}</h2>
		<p>{description}</p>
		<div class="user-links">
			{#each links as link, index}
				{#if index}
					<span>&nbsp;—</span>
				{/if}
				<Link href={link.href} target="_blank">{link.label}</Link>
			{/each}
		</div>
	</div>
</div>

<style>
	.user-card {
		display: flex;
	}

	img {
		border-radius: 50%;
		width: 150px;
	}

	h2,
	p,
	.user-links {
		padding-bottom: 12px;
	}

	.user-card :global(a) {
		display: inline-block;
	}

	@media (max-width: 720px) {
		.user-card {
			flex-direction: column;
			align-items: center;
		}
		img,
		h2,
		p,
		.user-links {
			text-align: center;
			padding-bottom: 12px;
		}
	}

	@media (min-width: 721px) {
		.user-card {
			gap: 16px;
		}
	}
</style>
