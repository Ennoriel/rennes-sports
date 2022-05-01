<script lang="ts">
	import { slide } from 'svelte/transition';

	import Autocomplete from "$lib/component/input/Autocomplete.svelte";
	import Button from '$lib/component/atom/Button.svelte';
	import ButtonGroup from '$lib/component/layout/ButtonGroup.svelte';
	import Select from '$lib/component/input/Select.svelte';
	import Title from '$lib/component/atom/Title.svelte';
	import TextInput from '$lib/component/input/TextInput.svelte';
	import Radio from '$lib/component/input/Radio.svelte';
	import Range from '$lib/component/input/Range.svelte';

	import type { Sport, RangeType } from '$lib/types/sport.type';
	import { sports } from '$lib/data/sports';
	import { locations } from '$lib/data/locations';
	import X from '$lib/component/svg/X.svelte';
	import { assos } from '$lib/data/assos';

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
	let createdSport: Partial<Sport>;

	let validated = false;

	function resetDb() {
		validated = true;
		fetch('/api/sports.json', {
			method: 'PUT'
		});
	}

	function createSport() {
		validated = true;
		createdSport = {
			sport: sport.sport,
			assoId: sport.assoId || 0,
			sex: sport.sex || 'Mixte',
			adult: sport.adult === 'Oui' && sport.birthYear[0] === 2004,
			otherYear: sport.parentChild === 'Oui' ? 'Parent-enfant' : undefined,
			birthYear: [...new Array(sport.birthYear[1] - sport.birthYear[0] + 1)].map(
				(_, i) => sport.birthYear[0] + i
			),
			level: sport.level,
			slots: sport.slots
		};

		fetch('/api/sports.json', {
			body: JSON.stringify(createdSport),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((res) => console.log(res));
	}

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

	$: if (sport.birthYear && !sport.birthYear.includes(2004)) sport.adult = 'Non';
</script>

<form>
	<div class="block">
		<Title>Ajouter une séance</Title>

		<!-- Sport -->
		<Autocomplete
			label="Sport"
			placeholder="Choisissez un sport"
			ariaLabel="Sport. Si le sport n'est pas disponible, appuyer sur X"
			options={[...new Set(sports.map((sport) => sport.sport))]}
			bind:value={sport.sport}
			isCreatable
		/>

		<!-- Association -->
		<div class="select-alternative-group">
			<Select
				label="Association"
				options={assos.map((asso) => ({ label: asso.name, value: asso.id }))}
				bind:value={sport.assoId}
			/>
		</div>

		<!-- Sex -->
		<Radio label="Sexe" options={['Mixte', 'Féminin', 'Masculin']} bind:value={sport.sex} />

		<!-- Birth year -->
		<Range label="Année de naissance" min={2004} max={2020} step={1} bind:range={sport.birthYear} />

		<!-- Adult -->
		<Radio
			label="Ouvert aux adultes"
			disabled={!sport.birthYear?.includes(2004)}
			options={['Oui', 'Non']}
			bind:value={sport.adult}
		/>

		<!-- Adult-child -->
		<Radio
			label="Cours spécial Parents Enfants"
			options={['Oui', 'Non']}
			bind:value={sport.parentChild}
		/>

		<!-- Level -->
		<Radio label="Pratique" options={['Compétition', 'Handisport', 'Loisir']} bind:value={sport.level} />
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

			<!-- Slot details -->
			<TextInput
				label="Détails du créneau"
				placeholder="Niveau poussin"
				bind:value={slot.details}
			/>

			<!-- Slot day -->
			<Radio
				label="Jour"
				options={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
				bind:value={slot.day}
			/>

			<!-- Slot hours -->
			<Range
				label="Horaire"
				labelInHour={true}
				min={360}
				max={1410}
				step={15}
				bind:range={slot.hour}
			/>

			<!-- Slot location -->
			<Select
				label="Lieu"
				placeholder="Salle / Gymnase"
				options={locations.map((o) => ({ label: o.name, value: o.id }))}
				bind:value={slot.locationId}
			/>
		</div>
	{/each}

	<ButtonGroup>
		<Button on:click={addSlot}>Ajouter un créneau</Button>
	</ButtonGroup>

	<ButtonGroup>
		<Button on:click={resetDb}>Réinitialiser la BDD</Button>
		<Button on:click={createSport}>Créer</Button>
		<Button
			variant="secondary"
			on:click={() => {
				sport = {};
				validated = false;
			}}
		>
			Réinitialiser
		</Button>
	</ButtonGroup>

	{#if validated}
		<div in:slideAndScroll|local={{ duration: 400 }} class="block slot">
			<Title>Merci !</Title>
			<p>Entrainement enregistré !</p>
		</div>
	{/if}
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

	.select-alternative-group {
		display: flex;
		flex-direction: column;
		gap: 10px;
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

		.select-alternative-group:not(.column) {
			flex-direction: row;
			align-items: flex-end;
		}

		.select-alternative-group :global(label) {
			flex-grow: 8;
		}
	}
</style>
