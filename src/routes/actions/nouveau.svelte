<script lang="ts">
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { enhance } from '$lib/utils/form';

	import Autocomplete from '$lib/component/input/Autocomplete.svelte';
	import Button from '$lib/component/atom/Button.svelte';
	import ButtonGroup from '$lib/component/layout/ButtonGroup.svelte';
	import Title from '$lib/component/atom/Title.svelte';
	import TextInput from '$lib/component/input/TextInput.svelte';
	import Radio from '$lib/component/input/Radio.svelte';
	import Range from '$lib/component/input/Range.svelte';
	import LocationAutocomplete from '$lib/component/input/LocationAutocomplete.svelte';

	import type { Sport, RangeType } from '$lib/types/sport.type';
	import { sports } from '$lib/data/sports';
	import X from '$lib/component/svg/X.svelte';

	export let error;

	let pending = false;

	let sport = {
		sport: undefined,
		assoId: undefined as number,
		sex: undefined,
		adult: undefined as 'Oui' | 'Non',
		parentChild: undefined,
		birthYear: undefined as Array<number>,
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

	function slideAndScroll(node, params) {
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
		pending: ({ data, form }) => {
			pending = true;
		},
		result: async () => {
			goto('/recherche/liste'); //FIXME
		},
		error: async (p) => {
			const body = await p.response.json();
			error = body?.error;
			pending = false;
		}
	}}
>
	<div class="block">
		<Title>Ajouter une séance</Title>

		<!-- Sport -->
		<Autocomplete
			label="Sport"
			name="sport"
			required
			placeholder="Choisissez un sport"
			options={[...new Set(sports.map((sport) => sport.sport))]}
			isCreatable
		/>

		<!-- Level -->
		<Radio
			label="Pratique"
			name="level"
			required
			options={['Compétition', 'Handisport', 'Loisir']}
		/>

		<!-- Sex -->
		<Radio label="Sexe" name="sex" required options={['Mixte', 'Féminin', 'Masculin']} />

		<!-- Birth year -->
		<Range
			label="Catégorie d'âge (années de naissance)"
			name="brithYear"
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
			options={[{label: "Oui", value: true}, {label: "Non", value: false}]}
		/>
	</div>

	<!-- Slots -->
	{#each sport.slots as slot, index}
		<div transition:slideAndScroll|local={{ duration: 800 }} class="block slot">
			<ButtonGroup>
				<Title>Créneau {index + 1}</Title>
				<Button variant="transparent" shape="circle" on:click={() => removeSlot(index)}>
					<X />
				</Button>
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
            <LocationAutocomplete required name="slots[{index}][location]"/>

			<!-- Slot details -->
			<TextInput
				label="Détails du créneau"
				name="slots[{index}][details]"
				required
				placeholder="Niveau poussin"
			/>
		</div>
	{/each}

	<ButtonGroup>
		<Button on:click={addSlot}>Ajouter un créneau</Button>
	</ButtonGroup>

	<ButtonGroup>
		<Button type="submit">Créer</Button>
		<Button
			variant="secondary"
			on:click={() => {
				sport = {
					birthYear: [2004, 2020],
					slots: [
						{
							hour: [360, 1410],
						}
					]
				};
			}}
		>
			Réinitialiser le formulaire
		</Button>
	</ButtonGroup>

	<!--{#if validated}-->
	<!--	<div in:slideAndScroll|local={{ duration: 400 }} class="block slot">-->
	<!--		<Title>Merci !</Title>-->
	<!--		<p>Entrainement enregistré !</p>-->
	<!--	</div>-->
	<!--{/if}-->
</form>

<style>
	form {
		margin: 0 16px 16px;
	}

	.block {
		margin: 64px 0;
	}

	.block:first-of-type {
		margin: 16px 0;
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

	@media (min-width: 532px) {
		form {
			width: 500px;
			margin: 0 auto 16px;
		}

		.block {
			border-radius: 8px;
			box-shadow: 0 0 3px #777;
			padding: 16px;
			margin: 16px 0;
		}

		.select-alternative-group :global(label) {
			flex-grow: 8;
		}
	}
</style>
