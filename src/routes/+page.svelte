<script lang="ts">
	import HeroSection from '../components/HeroSection.svelte';
	import heroImg from '../assets/home-img.jpg';
	import HomeAboutUs from '../components/home/HomeAboutUs.svelte';

	const imageUrl = heroImg;
	const title = 'We move the digital industry forward';
	const description =
		'We specialize in brand identities, campaigns, social strategies & content creation, commercials, websites, apps, books, environment, and more.';
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<HomeAboutUs />
</div>

<style>
	.body {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 75px;
		padding-bottom: 75px;
	}
</style>
