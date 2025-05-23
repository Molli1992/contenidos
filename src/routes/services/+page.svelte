<script lang="ts">
import HeroSection from '../../components/HeroSection.svelte';

	const imageUrl =
		'https://www.brandingmag.com/wp-content/uploads/2023/02/MaorOfek_Image2_1200x676PIXELS.jpg';
	const title = 'We move the digital industry forward';
	const description =
		'We specialize in brand identities, campaigns, social strategies & content creation, commercials, websites, apps, books, environment, and more.';
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