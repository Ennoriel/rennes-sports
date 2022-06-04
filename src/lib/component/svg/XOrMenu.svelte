<script lang="ts">
	import { fade } from 'svelte/transition';

	export let visible = false;

	function tr(node: SVGElement, { delay, duration }: { delay: number; duration: number }) {
		return {
			delay,
			duration,
			tick: (t: number) => {
				(node.childNodes[0] as SVGElement).setAttribute('d', `M5 5 L12 ${12 - 7 * t} L19 5`);
				(node.childNodes[1] as SVGElement).setAttribute('d', `M${12 - 7 * t} 12 L${12 + 7 * t} 12`);
				(node.childNodes[2] as SVGElement).setAttribute('d', `M5 19 L12 ${12 + 7 * t} L19 19`);
			}
		};
	}
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.5"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="feather feather-x"
>
	{#if visible}
		<g transition:tr|local={{ delay: 0, duration: 200 }}>
			<path d="M5 5 L19 5" />
			<path d="M5 12 L19 12" />
			<path d="M5 19 L19 19" />
		</g>
	{:else}
		<g in:fade>
			<line x1="19" y1="5" x2="5" y2="19" />
			<line x1="5" y1="5" x2="19" y2="19" />
		</g>
	{/if}
</svg>
