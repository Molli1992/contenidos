<script lang="ts">
	import HeroSection from '../components/hero/HeroSection.svelte';
	import heroImg from '../assets/images/hero/hero-section.jpg';
	import HomeAboutUs from '../components/home/HomeAboutUs.svelte';
	import HomeServices from '../components/home/HomeServices.svelte';
	import HomeKeyFeatures from '../components/home/HomeKeyFeatures.svelte';
	import Features from '../components/features/Features.svelte';
	import Companies from '../components/companies/Companies.svelte';

	const imageUrl = heroImg;
	const title = 'Llevamos el entretenimiento y la comunicación al siguiente nivel';
	const description =
		'Con décadas de experiencia en la producción y realización de espectáculos, desarrollamos contenidos audiovisuales y campañas publicitarias para todos los medios.';
</script>

<main class="body">
	<HeroSection {imageUrl} {title} {description} />

	<HomeAboutUs />

	<HomeServices />

	<HomeKeyFeatures />

	<Features />

	<Companies />
</main>

<style>
	.body {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 100px;
		padding-bottom: 100px;
	}
</style>
