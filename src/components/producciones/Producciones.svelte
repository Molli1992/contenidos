<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import Slider from '../Slider.svelte';
</script>

<section class="body">
	<div class="container">
		<DashedSeparator />
		<h1 class="black-title">Nuestros Éxitos en Pantalla</h1>
		<p class="black-text">
			Revive los momentos que marcaron la historia del entretenimiento Argentino. Desde los clásicos
			de Gerardo Sofovich hasta nuestras más recientes producciones, cada video es un testimonio de
			nuestra pasión por el cine, la televisión, el teatro y los eventos.
		</p>
	</div>

	<div class="container">
		<Slider producciones={true} />
	</div>
</section>

<style>
	.body {
		width: 100%;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		padding: 0px 25px;
		gap: 50px;
	}

	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
</style>
