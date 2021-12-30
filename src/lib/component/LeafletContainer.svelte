<script lang="ts">
	import { LeafletMap, TileLayer, Marker, Popup } from 'svelte-leafletjs';
	import MapPopup from './MapPopup.svelte';
	export let markers

	const mapOptions = {
		center: [48.1113618, -1.6500957],
		zoom: 12
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 18,
		maxNativeZoom: 18,
		attribution: '© OpenStreetMap contributors' // link to https://www.openstreetmap.org/copyright
	};
</script>

<LeafletMap options={mapOptions}>
	<TileLayer url={tileUrl} options={tileLayerOptions}/>
	{#each markers as marker}
		<Marker latLng={marker.location.coordinates}>
			<Popup>
				<MapPopup sports={marker.sports}/>
			</Popup>
		</Marker>
	{/each}
</LeafletMap>