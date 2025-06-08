<script lang="ts">
	import '../global.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Contenidos | Producción de Espectáculos y Publicidad</title>
	<meta
		name="description"
		content="Producción, realización y comercialización de espectáculos y campañas publicitarias en todos los medios."
	/>
	<meta
		name="keywords"
		content="contenidos, productora de espectáculos, publicidad en medios, pantallas LED CABA, Gerardo Sofovich, polémica en el bar, teatro, televisión, eventos"
	/>
	<meta name="author" content="Contenidos" />
	<meta name="creator" content="Contenidos" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.ico" />

	<!-- Open Graph -->
	<meta property="og:title" content="Contenidos | Producción de Espectáculos y Publicidad" />
	<meta
		property="og:description"
		content="Producción, realización y comercialización de espectáculos y campañas publicitarias en todos los medios."
	/>
	<meta property="og:url" content="https://contenidos.netlify.app/" />
	<meta property="og:site_name" content="Contenidos" />
	<meta
		property="og:image"
		content="https://wgl-dsites.net/unicoach/wp-content/uploads/2020/10/logo-B.png"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Logo Contenidos" />
	<meta property="og:locale" content="es_AR" />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Contenidos | Producción de Espectáculos y Publicidad" />
	<meta
		name="twitter:description"
		content="Producción, realización y comercialización de espectáculos y campañas publicitarias en todos los medios."
	/>
	<meta
		name="twitter:image"
		content="https://wgl-dsites.net/unicoach/wp-content/uploads/2020/10/logo-B.png"
	/>
</svelte:head>

<Header />
<slot />
<Footer />
