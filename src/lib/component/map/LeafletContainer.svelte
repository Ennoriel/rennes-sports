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
	import type { Map } from 'leaflet';

	import MapPopup from './MapPopup.svelte';
	import { metros } from '$lib/data/metro';
	import type { Bounds, Coordinates, Marker } from '$lib/types/location.type';
	import { getUrl } from '$lib/utils/url';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { floor } from '$lib/utils/number';

	export let markers: Array<Marker> = [];
	export let center: Coordinates = [48.1113618, -1.6500957];
	let bounds: Bounds | undefined = undefined;

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

	$: goto(getUrl($page.url, zoom > 11 ? { bounds } : {}, false).toString());

	const mapOptions = {
		center,
		zoom
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 4,
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
		let currBounds = getMap?.().getBounds();
		let west = currBounds.getWest();
		let south = currBounds.getSouth();
		let east = currBounds.getEast();
		let north = currBounds.getNorth();
		let offset = (north - south) / 2;
		bounds = {
			west: floor(west - offset, 4),
			south: floor(south - offset, 4),
			east: floor(east + offset, 4),
			north: floor(north + offset, 4)
		};
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

<style>
	:global(.leaflet-control-container .leaflet-control-zoom) {
		border: none;
		box-shadow: 0 0 4px #aaa;
		border-radius: 20px;
	}

	:global(.leaflet-control-zoom .leaflet-control-zoom-in),
	:global(.leaflet-control-zoom .leaflet-control-zoom-out) {
		border: none;
		width: 40px !important;
		height: 40px !important;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Roboto', sans-serif;
		font-weight: 100;
	}

	:global(.leaflet-control-zoom .leaflet-control-zoom-in) {
		border-radius: 20px 20px 0 0 !important;
	}

	:global(.leaflet-control-zoom .leaflet-control-zoom-out) {
		border-radius: 0 0 20px 20px !important;
	}

	:global(.leaflet-marker-icon:focus-visible) {
		outline: 2px solid var(--focus-color);
		border-radius: 50%;
		outline-offset: 4px;
		clip-path: ellipse(130px 140px at 10% 20%);
	}
</style>
