<script lang="ts">
	import HeroHeader from '../../components/hero/HeroHeader.svelte';
	import AboutUs from '../../components/aboutUs/AboutUs.svelte';
	import TimeLine from '../../components/aboutUs/TimeLine.svelte';

	const route = 'Nosotros';
</script>

<main class="body">
	<HeroHeader {route} />

	<AboutUs />

	<TimeLine />
</main>

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
