<script lang="ts">
	import {
		LeafletMap,
		TileLayer,
		Marker as LeafletMarker,
		Popup,
		Polyline,
		Circle,
		Tooltip,
		ScaleControl
	} from 'svelte-leafletjs';
	import { icon as LeafletIcon } from 'leaflet';
	import type { Map, LatLng } from 'leaflet';

	import MapPopup from './MapPopup.svelte';
	import { metros } from '$lib/data/metro';
	import type { Coordinates, Marker } from '$lib/types/location.type';

	export let markers: Array<Marker>;
	export let center: Coordinates = [48.1113618, -1.6500957];
	let currCenter: LatLng;

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

	const icon = LeafletIcon({
		iconUrl: '/svg/location-blue.svg',
		iconSize: [36, 36],
		iconAnchor: [18, 36],
		popupAnchor: [0, -40]
	});

	$: if (getMap) getMap().setView(center);

	setInterval(() => {
		if (getMap) {
			getMap().invalidateSize();
		}
	}, 1000);

	$: console.log(currCenter);

	let getMap: () => Map;
</script>

<LeafletMap
	bind:getMap
	options={mapOptions}
	events={['moveend']}
	on:moveend={() => {
		currCenter = getMap && getMap().getCenter();
	}}
>
	<TileLayer url={tileUrl} options={tileLayerOptions} />
	{#each markers as marker}
		<LeafletMarker latLng={marker.location.coordinates} {icon}>
			<Popup>
				<MapPopup location={marker.location} sports={marker.sports} />
			</Popup>
		</LeafletMarker>
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
				fillOpacity={1}
			>
				<Tooltip>{station.name}</Tooltip>
			</Circle>
		{/each}
	{/each}
	<ScaleControl position="bottomright" options={{ imperial: false }} />
</LeafletMap>
