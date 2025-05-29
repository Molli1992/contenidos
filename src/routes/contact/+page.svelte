<script lang="ts">
	import HeroHeader from '../../components/hero/HeroHeader.svelte';
	import GoogleMap from '../../components/contact/GoogleMap.svelte';
	import FormContact from '../../components/contact/FormContact.svelte';

	const route = 'Contact Us';
</script>

<div class="body">
	<HeroHeader {route} />

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
