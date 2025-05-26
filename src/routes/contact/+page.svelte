<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';
	import heroImg from '../../assets/contact-img.avif';
	import GoogleMap from '../../components/contact/GoogleMap.svelte';
	import FormContact from '../../components/contact/FormContact.svelte';

	const imageUrl = heroImg;
	const title = "Let's Build Something Great Together";
	const description =
		"Ready to start your next digital project? Have questions about our services? Reach out to us today and let's discuss how we can help your business thrive.";
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<FormContact />

	<GoogleMap />
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
