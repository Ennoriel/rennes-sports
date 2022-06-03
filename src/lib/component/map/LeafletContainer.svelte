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

	export let markers: Array<Marker> = [];
	export let center: Coordinates = [48.1113618, -1.6500957];
	let currCenter: LatLng;

	let zoom = 13;

	const config = {
		'18': { radius: 10, weight: 6, size: 60 },
		'17': { radius: 12, weight: 4, size: 50 },
		'16': { radius: 15, weight: 3.5, size: 45 },
		'15': { radius: 20, weight: 3, size: 40 },
		'14': { radius: 25, weight: 2.5, size: 35 },
		'13': { radius: 25, weight: 2, size: 30 },
		'12': { radius: 25, weight: 1, size: 25 }
	};

	$: currConfig = config[Math.max(12, zoom).toString()];

	const mapOptions = {
		center,
		zoom
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 18,
		maxNativeZoom: 18,
		attribution: '© OpenStreetMap contributors' // link to https://www.openstreetmap.org/copyright
	};

	$: icon = LeafletIcon({
		iconUrl: '/svg/location-blue.svg',
		iconSize: [currConfig.size, currConfig.size],
		iconAnchor: [currConfig.size / 2, currConfig.size],
		popupAnchor: [0, -1.1 * currConfig.size]
	});

	$: if (getMap) getMap().setView(center);

	let getMap: () => Map;
</script>

<LeafletMap
	bind:getMap
	options={mapOptions}
	events={['moveend', 'zoom', 'resize']}
	on:moveend={() => {
		currCenter = getMap && getMap()?.getCenter();
		getMap && getMap()?.invalidateSize();
	}}
	on:resize={() => {
		getMap && getMap()?.invalidateSize();
	}}
	on:zoom={() => {
		zoom = getMap && getMap()?.getZoom();
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
			weight={currConfig.weight}
		/>
		{#each metro.stations as station}
			<Circle
				latLng={station.coordinates}
				radius={currConfig.radius}
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
