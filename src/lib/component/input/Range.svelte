<script lang="ts">
	import { onMount } from 'svelte';
	import { displayHour } from '$lib/utils/time';
	import { RangeType } from '$lib/types/sport.type';

	export let label: string;
	export let labelInHour = false;
	export let min: number;
	export let max: number;
	export let range: RangeType = [0, 0];
	export let step: number;

	let intervals;

	onMount(() => {
		let i = min;
		intervals = [];
		while (i <= max) {
			intervals.push(i);
			i += step;
		}
		if (range[0] === 0 && range[1] === 0) range = [min, intervals[intervals.length - 1]];
	});

	let rangeEl;

	let minPressed = false;
	let maxPressed = false;

	// Triggers the first position rendering
	$: if (rangeEl) range = range;

	function closest(array, value) {
		return array.reduce((prev, curr) =>
			Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
		);
	}

	function valToPos(val) {
		if (!rangeEl) return 0;
		return ((val - min) * rangeEl.getBoundingClientRect().width) / (max - min);
	}

	function posToVal(pos) {
		return min + (pos * (max - min)) / rangeEl.getBoundingClientRect().width;
	}

	function mouseMove(e) {
		if (minPressed || maxPressed) {
			let pos = e.clientX - rangeEl.getBoundingClientRect().left;
			let val = posToVal(pos);
			let closestVal = closest(intervals, val);
			range = [
				minPressed ? Math.min(closestVal, range[1] - step) : range[0],
				maxPressed ? Math.max(closestVal, range[0] + step) : range[1]
			];
		}
	}

	function mouseUp() {
		minPressed = false;
		maxPressed = false;
	}

	function keyDown(e, isMinIndicator) {
		if (e.key === 'ArrowLeft') {
			range = [
				isMinIndicator ? Math.max(min, range[0] - step) : range[0],
				isMinIndicator ? range[1] : Math.max(range[1] - step, range[0] + step)
			];
		} else if (e.key === 'ArrowRight') {
			range = [
				isMinIndicator ? Math.min(range[0] + step, range[1] - step) : range[0],
				isMinIndicator ? range[1] : Math.min(max, range[1] + step)
			];
		}
	}
</script>

<svelte:window on:mousemove={mouseMove} on:mouseup={mouseUp} />

<label>
	{label}
	<div class="range" bind:this={rangeEl}>
		<div
			class="selected-range"
			style="left: {valToPos(range[0])}px; width: {valToPos(range[1]) - valToPos(range[0])}px;"
		/>
		<div
			class="indicator"
			tabindex="0"
			on:keydown={(e) => keyDown(e, true)}
			on:mousedown={() => (minPressed = true)}
			style="left: {valToPos(range[0])}px"
		>
			<span>
				{labelInHour ? displayHour(range[0]) : range[0]}
			</span>
		</div>
		<div
			class="indicator"
			tabindex="0"
			on:keydown={(e) => keyDown(e, false)}
			on:mousedown={() => (maxPressed = true)}
			style="left: {valToPos(range[1])}px"
		>
			<span class:top={range[1] - range[0] <= (max - min) / 6}>
				{labelInHour ? displayHour(range[1]) : range[1]}
			</span>
		</div>
	</div>
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		font-size: 17px;
		font-weight: 500;
		gap: 10px;
		margin: 20px 0 35px;
	}
	.range {
		position: relative;
		font-size: 14px;
		margin: 10px 20px;
		width: calc(100% - 40px);
		height: 2px;
		background-color: #e3e3e3;
	}
	.indicator {
		position: absolute;
		top: -9px;
		width: 20px;
		height: 20px;
		box-sizing: border-box;
		border-radius: 10px;
		border: 2px solid var(--main-color);
		background-color: white;
		margin: 0 -10px;
		cursor: pointer;
	}
	.indicator:focus {
		box-shadow: 0 0 5px black;
		font-weight: 700;
	}
	.selected-range {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: var(--main-color);
	}
	span {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		user-select: none;
	}
	.top {
		top: -24px;
	}
</style>
