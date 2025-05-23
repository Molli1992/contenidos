<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';
	import heroImg from '../../assets/services-img.webp';

	const imageUrl = heroImg;
	const title = 'Your Vision, Our Digital Craftsmanship';
	const description =
		'We offer a full spectrum of digital services designed to transform your ideas into compelling online realities. From strategic planning to flawless execution, we build solutions that drive growth and engagement for your business.';
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />
</div>

<style>
	.body {
		width: 100%;
		height: 100vh;
	}
</style>
