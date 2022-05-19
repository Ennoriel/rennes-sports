<script lang="ts">
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { enhance } from '$lib/utils/form';

	import type { RangeType } from '$lib/types/sport.type';
	import { LEVELS } from '$lib/data/sport';

	import Button from '$lib/component/atom/Button.svelte';
	import ButtonGroup from '$lib/component/layout/ButtonGroup.svelte';
	import Radio from '$lib/component/input/Radio.svelte';
	import Range from '$lib/component/input/Range.svelte';
	import LocationAutocomplete from '$lib/component/input/LocationAutocomplete.svelte';
	import X from '$lib/component/svg/X.svelte';
	import SportAutocomplete from '../../lib/component/input/SportAutocomplete.svelte';
	import TextArea from '../../lib/component/input/TextArea.svelte';

	export let error: string | undefined = undefined;

	let pending = false;

	let sport = {
		sport: undefined,
		assoId: undefined as number,
		sex: undefined,
		adult: undefined as 'Oui' | 'Non',
		parentChild: undefined,
		birthYear: undefined as RangeType,
		level: undefined,
		slots: [
			{
				details: undefined as string,
				day: undefined as string,
				hour: [360, 1410] as RangeType,
				locationId: undefined as number
			}
		]
	};

	function addSlot() {
		sport.slots = sport.slots.concat({
			details: undefined,
			day: undefined,
			hour: [360, 1410],
			locationId: undefined
		});
	}

	function slideAndScroll(node: Element, params: { duration?: number }) {
		let intervalId = setInterval(() => {
			window.scrollTo(0, document.body.scrollHeight);
		}, 10);

		setTimeout(() => {
			clearInterval(intervalId);
		}, params.duration || 800);

		return slide(node, params);
	}

	function removeSlot(index: number) {
		sport.slots.splice(index, 1);
		sport.slots = sport.slots;
	}

	$: if (sport.birthYear && !sport.birthYear?.includes(2004)) sport.adult = 'Non';
</script>

<form
	action="/actions/creer-creneau"
	method="post"
	use:enhance={{
		pending: () => {
			pending = true;
		},
		result: async () => {
			setTimeout(() => goto('/recherche/liste'), 0);
		},
		error: async (p) => {
			const body = await p.response.json();
			error = body?.error;
			pending = false;
		}
	}}
>
	<h1>Ajouter des entrainements</h1>
	<div class="block">
		<h2><span>Informations séance</span></h2>

		<!-- Sport -->
		<SportAutocomplete required isCreatable variant="square" />

		<!-- Level -->
		<Radio label="Pratique" name="level" required options={LEVELS} />

		<!-- Sex -->
		<Radio label="Sexe" name="sex" required options={['Mixte', 'Féminin', 'Masculin']} />

		<!-- Birth year -->
		<Range
			label="Catégorie d'âge (années de naissance)"
			name="birthYear"
			min={2004}
			max={2020}
			step={1}
			bind:range={sport.birthYear}
		/>

		<!-- Adult -->
		<Radio
			label="Séance ouverte aux adultes (>= 2004)"
			name="adult"
			required={sport.birthYear?.includes(2004)}
			disabled={!sport.birthYear?.includes(2004)}
			options={[
				{ label: 'Oui', value: true },
				{ label: 'Non', value: false }
			]}
		/>
	</div>

	<!-- Slots -->
	{#each sport.slots as _, index}
		<div transition:slideAndScroll|local={{ duration: 800 }} class="block slot">
			<ButtonGroup>
				<h2><span>Créneau {index + 1}</span></h2>
				<Button
					theme="transparent"
					variant="rounded"
					size="s"
					on:click={() => removeSlot(index)}
					icon={X}
				/>
			</ButtonGroup>

			<!-- Slot day -->
			<Radio
				label="Jour"
				name="slots[{index}][day]"
				required
				options={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
			/>

			<!-- Slot hours -->
			<Range
				label="Horaire"
				name="slots[{index}][hour]"
				labelInHour={true}
				min={360}
				max={1410}
				step={15}
			/>

			<!-- Slot location -->
			<LocationAutocomplete required name="slots[{index}][location]" variant="square" />

			<!-- Slot details -->
			<TextArea
				label="Détails du créneau"
				name="slots[{index}][details]"
				placeholder="Niveau poussin"
				variant="square"
			/>
		</div>
	{/each}

	<ButtonGroup direction="vertical">
		<Button variant="squarish" on:click={addSlot}>
			<span>Ajouter un {sport.slots.length + 1}<sup>ème</sup> créneau</span>
		</Button>
		<Button type="submit" theme="vibrant" disabled={pending}>Enregistrer</Button>
	</ButtonGroup>
</form>

<style>
	form {
		margin: 0 auto 64px;
		max-width: 600px;
	}

	.block {
		margin: 16px;
		padding: 16px;
		border-radius: 8px;
		background-color: white;
	}

	.slot :global(.button-group) {
		margin: 0;
	}

	.slot :global(h1) {
		margin: 0;
		line-height: 33px;
		flex-grow: 1;
	}
	.slot :global(button) {
		flex-grow: 0;
	}

	h1 {
		color: var(--main-color);
		text-align: center;
		margin: 16px 0;
		font-size: 24px;
	}
	h2 {
		color: var(--main-color);
		text-align: center;
		margin-bottom: 24px;
		font-size: 16px;
		flex-grow: 1;
	}
	h2 span {
		border-bottom: 1px solid var(--main-color);
	}
</style>
