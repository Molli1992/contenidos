<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';
	import heroImg from '../../images/contact-img.avif';

	const imageUrl = heroImg;
	const title = "Let's Build Something Great Together";
	const description =
		"Ready to start your next digital project? Have questions about our services? Reach out to us today and let's discuss how we can help your business thrive.";
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
