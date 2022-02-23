<script lang="ts">
	import {
		LeafletMap,
		TileLayer,
		Marker,
		Popup,
		Polyline,
		Circle,
		Tooltip,
		ScaleControl
	} from 'svelte-leafletjs';
	import L from 'leaflet';

	import MapPopup from './MapPopup.svelte';
	import { metros } from '$lib/data/metro';

	export let markers;
	export let center = [48.1113618, -1.6500957];
	let currCenter = center;

	const mapOptions = {
		center,
		zoom: 13
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 18,
		maxNativeZoom: 18,
		attribution: '© OpenStreetMap contributors' // link to https://www.openstreetmap.org/copyright
	};

	const icon = L.icon({
		iconUrl: '/svg/location-blue.svg',
		iconSize: [36, 36],
		iconAnchor: [18, 36],
		popupAnchor: [0, -40]
	});

	$: if (leafletMap) leafletMap.getMap().setView(center);

	let leafletMap;
</script>

<LeafletMap
	bind:this={leafletMap}
	options={mapOptions}
	events={['moveend']}
	on:moveend={(e) => {
		currCenter = leafletMap.getMap().getCenter();
	}}
>
	<TileLayer url={tileUrl} options={tileLayerOptions} />
	{#each markers as marker}
		<Marker latLng={marker.location.coordinates} {icon}>
			<Popup>
				<MapPopup location={marker.location} sports={marker.sports} />
			</Popup>
		</Marker>
	{/each}
	<Polyline
		latLngs={metros.map((metro) => metro.coordinates)}
		color="#ff0000"
		fillColor="#ff0000"
	/>
	{#each metros as metro}
		<Circle
			latLng={metro.coordinates}
			radius={40}
			color="#ff0000"
			fillColor="#ff0000"
			fillOpacity="1"
		>
			<Tooltip>{metro.name}</Tooltip>
		</Circle>
	{/each}
	<ScaleControl position="bottomright" options={{ imperial: false }} />
</LeafletMap>
