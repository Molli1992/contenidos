<script lang="ts">
	import HeroSection from '../components/HeroSection.svelte';
	import heroImg from '../assets/home-img.jpg';

	const imageUrl = heroImg;
	const title = 'We move the digital industry forward';
	const description =
		'We specialize in brand identities, campaigns, social strategies & content creation, commercials, websites, apps, books, environment, and more.';
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<div class="flex-container">
		<h1>Seofy Is A Digital Creative Studio</h1>

		<p></p>
		<p></p>

		<button>READ MORE</button>
	</div>
</div>

<style>
	.body {
		width: 100%;
		height: 100vh;
	}
</style>
