<script lang="ts">
	import { LeafletMap, TileLayer, Marker, Popup, Polyline, Circle, Tooltip } from 'svelte-leafletjs';
	import MapPopup from './MapPopup.svelte';
	import {metros} from "$lib/data/metro";
	export let markers;

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
	<TileLayer url={tileUrl} options={tileLayerOptions} />
	{#each markers as marker}
		<Marker latLng={marker.location.coordinates}>
			<Popup>
				<MapPopup location={marker.location} sports={marker.sports} />
			</Popup>
		</Marker>
	{/each}
	<Polyline latLngs={metros.map(metro => metro.coordinates)} color="#ff0000" fillColor="#ff0000" />
	{#each metros as metro}
		<Circle latLng={metro.coordinates} radius={40} color="#ff0000" fillColor="#ff0000" fillOpacity=1>
			<Tooltip>{metro.name}</Tooltip>
		</Circle>
	{/each}
</LeafletMap>
