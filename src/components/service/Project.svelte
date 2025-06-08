<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import Slider from '../Slider.svelte';
</script>

<div class="body">
	<div class="container">
		<DashedSeparator />
		<h1 class="black-title">Disfrutá Nuestros Proyectos Destacados</h1>
		<p class="black-text">
			Te invitamos a conocer algunas de nuestras producciones más emblemáticas en teatro,
			televisión, cine y eventos. En Contenidos trabajamos con pasión para hacer realidad cada idea,
			aportando creatividad, experiencia y compromiso en cada proyecto.
		</p>
	</div>

	<div class="container">
		<Slider projects={true} />
	</div>
</div>

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
