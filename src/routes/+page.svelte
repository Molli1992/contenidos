<script lang="ts">
	import HeroSection from '../components/HeroSection.svelte';
	import heroImg from '../assets/home-img.jpg';
	import BlueButton from '../components/BlueButton.svelte';
	import { goto } from '$app/navigation';

	const imageUrl = heroImg;
	const title = 'We move the digital industry forward';
	const description =
		'We specialize in brand identities, campaigns, social strategies & content creation, commercials, websites, apps, books, environment, and more.';

	const routeAboutUs = () => {
		goto('/about');
	};
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<div class="flex-container">
		<h1>Seofy Is A Digital Creative Studio</h1>

		<p>
			We specialize in brand identities, campaigns, social strategy& content creation, commercials,
			websites.
		</p>
		<p>
			We are artists, designers, engineers, thinkers and learns, buldiers and dreamers hell beln on
			building on the best damn digital products possible for our clients.
		</p>

		<BlueButton value="READ MORE" onclick={routeAboutUs} />
	</div>

	<div class="img-container" />
</div>

<style>
	.body {
		width: 100%;
	}
</style>
