<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';

	const imageUrl =
		'https://assets.entrepreneur.com/content/3x2/2000/1733146687-marketing.jpg?format=pjeg&auto=webp&crop=16:9';
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
