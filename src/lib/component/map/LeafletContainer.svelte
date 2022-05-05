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

	// setInterval(() => {
	// 	if (leafletMap) {
	// 		leafletMap.getMap().invalidateSize();
	// 	}
	// }, 1000);

	$: console.log(leafletMap)

	let leafletMap;
</script>

<LeafletMap
	bind:this={leafletMap}
	options={mapOptions}
	events={['moveend']}
	on:moveend={() => {
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
	{#each metros as metro}
		<Polyline
				latLngs={metro.stations.map((metro) => metro.coordinates)}
				color={metro.color}
				fillColor={metro.color}
		/>
		{#each metro.stations as station}
			<Circle
					latLng={station.coordinates}
					radius={40}
					color={metro.color}
					fillColor={metro.color}
					fillOpacity="1"
			>
				<Tooltip>{station.name}</Tooltip>
			</Circle>
		{/each}
	{/each}
	<ScaleControl position="bottomright" options={{ imperial: false }} />
</LeafletMap>
