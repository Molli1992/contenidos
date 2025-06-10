<script lang="ts">
	import HeroHeader from '../../components/hero/HeroHeader.svelte';
	import Producciones from '../../components/producciones/Producciones.svelte';

	const route = 'Producciones';
</script>

<main class="body">
	<HeroHeader {route} />

	<Producciones />
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
