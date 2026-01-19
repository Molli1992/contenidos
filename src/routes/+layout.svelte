<script lang="ts">
	import '../global.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>NTG | Producción de Espectáculos y Publicidad</title>
	<meta
		name="description"
		content="Producción, realización y comercialización de espectáculos y campañas publicitarias en todos los medios."
	/>
	<meta
		name="keywords"
		content="NTG, productora de espectáculos, publicidad en medios, pantallas LED CABA, Gerardo Sofovich, polémica en el bar, teatro, televisión, eventos"
	/>
	<meta name="author" content="NTG" />
	<meta name="creator" content="NTG" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.ico" />

	<!-- Open Graph -->
	<meta property="og:title" content="NTG | Producción de Espectáculos y Publicidad" />
	<meta
		property="og:description"
		content="Producción, realización y comercialización de espectáculos y campañas publicitarias en todos los medios."
	/>
	<meta property="og:url" content="https://ntg.netlify.app/" />
	<meta property="og:site_name" content="NTG" />
	<meta
		property="og:image"
		content=""
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Logo NTG" />
	<meta property="og:locale" content="es_AR" />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="NTG | Producción de Espectáculos y Publicidad" />
	<meta
		name="twitter:description"
		content="Producción, realización y comercialización de espectáculos y campañas publicitarias en todos los medios."
	/>
	<meta
		name="twitter:image"
		content=""
	/>
</svelte:head>

<Header />
<slot />
<Footer />
