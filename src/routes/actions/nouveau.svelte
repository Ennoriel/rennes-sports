<script lang="ts">
	import { slide } from 'svelte/transition';

	import Button from '$lib/component/Button.svelte';
	import ButtonGroup from '$lib/component/ButtonGroup.svelte';
	import Select from '$lib/component/input/Select.svelte';
	import Title from '$lib/component/Title.svelte';
	import TextInput from '$lib/component/input/TextInput.svelte';
	import Radio from '$lib/component/input/Radio.svelte';
	import Range from '$lib/component/input/Range.svelte';

	import { Sport, RangeType } from '$lib/types/sport.type';
	import { sports } from '$lib/data/sports';
	import { locations } from '$lib/data/locations';
	import X from '$lib/component/svg/X.svelte';

	let sport = {
		sport: undefined,
		newSport: undefined,
		assoName: undefined,
		newAssoName: undefined,
		website: undefined,
		newWebsite: undefined,
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

	let formConfig = {
		newSport: false,
		newAsso: false
	};

	let validated = false;

	function createSport() {
		validated = true;
		createdSport = {
			sport: sport.newSport || sport.sport,
			assoName: sport.newAssoName || sport.assoName,
			website: sport.newWebsite || sport.website,
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
		}).then(res => res.json()).then(res => console.log(res))
	}

	function addSlot() {
		sport.slots = sport.slots.concat({
			details: undefined,
			day: undefined,
			hour: [360, 1410],
			locationId: undefined
		});
		let intervalId = setInterval(() => {
			window.scrollTo(0, document.body.scrollHeight);
		}, 10);
		setTimeout(() => {
			clearInterval(intervalId);
		}, 800);
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
		<div class="select-alternative-group" class:column={formConfig.newSport}>
			<Select
				label="Sport"
				ariaLabel="Sport. Si le sport n'est pas disponible, appuyer sur X"
				options={[...new Set(sports.map((sport) => sport.sport))]}
				bind:value={sport.sport}
				on:input={() => {
					formConfig.newSport = false;
					sport.newSport = undefined;
				}}
			/>

			{#if !formConfig.newSport}
				<Button on:click={() => (formConfig.newSport = true)}
					>Le sport n'est pas dans la liste</Button
				>
			{:else}
				<TextInput label="Nouveau sport" bind:value={sport.newSport} />
			{/if}
		</div>

		<!-- Association -->
		<div class="select-alternative-group" class:column={formConfig.newAsso}>
			<Select
				label="Association"
				options={[...new Set(sports.map((sport) => sport.assoName))]}
				bind:value={sport.assoName}
				on:input={() => {
					formConfig.newAsso = false;
					sport.newAssoName = undefined;
					sport.newWebsite = undefined;
				}}
			/>

			{#if !formConfig.newAsso}
				<Button on:click={() => (formConfig.newAsso = true)}
					>L'association n'est pas dans la liste</Button
				>
			{:else}
				<TextInput
					label="Nom de l'association"
					placeholder="Association du haricot rouge"
					bind:value={sport.newAssoName}
				/>
				<TextInput
					label="Site web"
					placeholder="https://mon.association.fr"
					bind:value={sport.newWebsite}
				/>
			{/if}
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
		<Radio label="Pratique" options={['Compétition', 'Loisir']} bind:value={sport.level} />
	</div>

	<!-- Slots -->
	{#each sport.slots as slot, index}
		<div transition:slide|local={{ duration: 800 }} class="block slot">
			<ButtonGroup>
				<Title>Créneau {index + 1}</Title>
				<Button variant="secondary" shape="circle" on:click={() => removeSlot(index)}>
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
		<Button on:click={createSport}>Créer</Button>
		<Button
			variant="secondary"
			on:click={() => {
				sport = {};
				validated = false;
			}}>Réinitialiser</Button
		>
	</ButtonGroup>

	{#if validated}
		<div class="block">
			<Title>Sport</Title>
			<pre>
				{JSON.stringify(createdSport, null, 2)}
			</pre>
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

	pre {
		margin: 0;
	}
</style>
