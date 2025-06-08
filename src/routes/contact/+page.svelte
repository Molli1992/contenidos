<script lang="ts">
	import HeroHeader from '../../components/hero/HeroHeader.svelte';
	import FormContact from '../../components/contact/FormContact.svelte';

	const route = 'Contacto';
</script>

<main class="body">
	<HeroHeader {route} />

	<FormContact />
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
