<script lang="ts">
	import { GoogleMap, APIProvider, Marker } from 'svelte-google-maps-api';
	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';

	export const ssr = false;

	let apiKey = PUBLIC_GOOGLE_MAPS_API_KEY;

	let center = { lat: 40.753597, lng: -73.983233 };
	let zoom = 14;

	let markerPosition = { lat: 40.753597, lng: -73.983233 };

	let mapOptions = {
		center,
		zoom
	};
</script>

<div class="map-container">
	<APIProvider {apiKey} libraries={['marker']}>
		<GoogleMap options={mapOptions}>
			<Marker position={markerPosition} />
		</GoogleMap>
	</APIProvider>
</div>

<style>
	.map-container {
		width: 100%;
		max-width: 1200px;
		height: 500px;
		padding: 0px 25px;
	}
</style>
