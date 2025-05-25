<script lang="ts">
	import HeroSection from '../components/HeroSection.svelte';
	import heroImg from '../assets/home-img.jpg';
	import HomeAboutUs from '../components/home/HomeAboutUs.svelte';
	import HomeServices from '../components/home/HomeServices.svelte';
	import HomeKeyFeatures from '../components/home/HomeKeyFeatures.svelte';
	import Features from '../components/features/Features.svelte';

	const imageUrl = heroImg;
	const title = 'We move the digital industry forward';
	const description =
		'We specialize in brand identities, campaigns, social strategies & content creation, commercials, websites, apps, books, environment, and more.';
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<HomeAboutUs />

	<HomeServices />

	<HomeKeyFeatures />

	<Features />
</div>

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
