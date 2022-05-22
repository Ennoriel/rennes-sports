<script lang="ts">
	import { onMount } from 'svelte';
	import { displayDecimalHour, displayTextHour } from '$lib/utils/time';
	import type { RangeType } from '$lib/types/sport.type';
	import InputHidden from './InputHidden.svelte';

	export let label: string;
	export let name: string;
	export let labelInHour = false;
	export let min = 0;
	export let max = 100;
	export let range: RangeType = [0, 0];
	export let step = 5;

	let intervals: Array<number>;

	onMount(() => {
		let i = min;
		intervals = [];
		while (i <= max) {
			intervals.push(i);
			i += step;
		}
		if (range[0] === 0 && range[1] === 0) range = [min, intervals[intervals.length - 1]];
	});

	let rangeEl: HTMLDivElement;

	let minPressed = false;
	let maxPressed = false;

	// Triggers the first position rendering
	$: if (rangeEl) range = range;

	function closest(array: Array<number>, value: number): number {
		return array.reduce((prev, curr) =>
			Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
		);
	}

	function valToPos(val: number): number {
		if (!rangeEl) return 0;
		return ((val - min) * rangeEl.getBoundingClientRect().width) / (max - min);
	}

	function posToVal(pos: number): number {
		return min + (pos * (max - min)) / rangeEl.getBoundingClientRect().width;
	}

	function mouseMove(e: MouseEvent | TouchEvent) {
		if (minPressed || maxPressed) {
			let pos = 'clientX' in e ? e.clientX : e.changedTouches?.[0]?.pageX;
			pos -= rangeEl.getBoundingClientRect().left;

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

	function keyDown(e: KeyboardEvent, isMinIndicator: boolean) {
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

	$: rangeLabel = labelInHour
		? [displayTextHour(range[0]), displayTextHour(range[1])]
		: [range[0].toString(), range[1].toString()];
	$: rangeLabelDecimal = labelInHour
		? [displayDecimalHour(range[0]), displayDecimalHour(range[1])]
		: range;
	$: minLabel = labelInHour ? displayDecimalHour(min) : min;
	$: maxLabel = labelInHour ? displayDecimalHour(max) : max;
</script>

<svelte:window
	on:mousemove={mouseMove}
	on:mouseup={mouseUp}
	on:touchmove={mouseMove}
	on:touchend={mouseUp}
/>

<fieldset>
	<span aria-hidden="true">{label}</span>
	<div class="range" bind:this={rangeEl}>
		<div
			class="selected-range"
			style="left: {valToPos(range[0])}px; width: {valToPos(range[1]) - valToPos(range[0])}px;"
		/>
		<div
			class="indicator"
			tabindex="0"
			role="slider"
			aria-label="{label}, valeur minimale"
			aria-valuemin={minLabel}
			aria-valuemax={rangeLabelDecimal[1]}
			aria-valuenow={rangeLabelDecimal[0]}
			aria-valuetext={rangeLabel[0]}
			on:keydown={(e) => keyDown(e, true)}
			on:mousedown={() => (minPressed = true)}
			on:touchstart={() => (minPressed = true)}
			style="left: {valToPos(range[0])}px"
		>
			<span class="valuenow" aria-hidden="true">
				{rangeLabel[0]}
			</span>
		</div>
		<div
			class="indicator"
			tabindex="0"
			role="slider"
			aria-label="{label}, valeur maximale"
			aria-valuemin={rangeLabelDecimal[0]}
			aria-valuemax={maxLabel}
			aria-valuenow={rangeLabelDecimal[1]}
			aria-valuetext={rangeLabel[1]}
			on:keydown={(e) => keyDown(e, false)}
			on:mousedown={() => (maxPressed = true)}
			on:touchstart={() => (maxPressed = true)}
			style="left: {valToPos(range[1])}px"
		>
			<span class="valuenow" class:top={range[1] - range[0] <= (max - min) / 6} aria-hidden="true">
				{rangeLabel[1]}
			</span>
		</div>
	</div>

	<InputHidden {name} value={range} />
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
		font-size: 14px;
		font-weight: 700;
		gap: 10px;
		margin: 20px 0 35px;
		border: none;
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
	.indicator:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
	.selected-range {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: var(--main-color);
	}
	.valuenow {
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
