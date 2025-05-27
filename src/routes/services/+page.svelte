<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';
	import heroImg from '../../assets/services-img.webp';
	import Service from '../../components/service/Service.svelte';

	const imageUrl = heroImg;
	const title = 'Your Vision, Our Digital Craftsmanship';
	const description =
		'We offer a full spectrum of digital services designed to transform your ideas into compelling online realities. From strategic planning to flawless execution, we build solutions that drive growth and engagement for your business.';
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<Service />
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
