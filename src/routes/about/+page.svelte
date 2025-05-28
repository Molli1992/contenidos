<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';
	import heroImg from '../../assets/about-us-img.avif';
	import AboutUs from '../../components/aboutUs/AboutUs.svelte';
	import TimeLine from '../../components/aboutUs/TimeLine.svelte';

	const imageUrl = heroImg;
	const title = 'Where Creativity Meets Strategic Growth';
	const description =
		"We're more than just an agency; we're your digital partners. Guided by collaboration, transparency, and a relentless pursuit of innovation, we build lasting online presences designed for real-world results.";
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<AboutUs />

	<TimeLine />
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
