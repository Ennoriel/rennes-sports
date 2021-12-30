<script lang="ts">
	import { Sport } from '../types/sport.type';

	export let sports: Array<Sport>;
</script>

<div class="wrapper">
	{#each sports as sport}
		<div>
			{sport.sport}
			{sport.sex}
		</div>
		<div>
			{sport.assoName}
		</div>
		<hr />
	{/each}
</div>

<style>
	:global(.leaflet-popup-content) {
		max-height: 200px;
		overflow-y: auto;
		overflow-x: hidden;
		margin: 13px 0 13px 19px;
	}

	.wrapper {
		margin-right: 19px;
		overflow: hidden;
		min-width: 200px;
	}
</style>
