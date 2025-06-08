<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
</script>

<div
	class="container"
	style="flex-direction: column; align-items: center; justify-content: center;"
>
	<div class="title-container">
		<DashedSeparator />
		<h1 class="black-title">Trabajamos juntos</h1>
		<p class="black-text">
			El motor detrás de nuestros éxitos es un equipo comprometido con la creatividad, la
			experiencia y la pasión por el entretenimiento. Juntos, combinamos talento y profesionalismo
			para llevar adelante proyectos innovadores y de alto impacto en teatro, televisión, cine y
			publicidad.
		</p>
	</div>

	<div class="img-container"></div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1200px;
		padding: 0px 25px;
		display: flex;
	}

	.title-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 700px;
		text-align: center;
		gap: 25px;
	}

	.img-container {
		width: 100%;
		height: 600px;
		background-image: url('../../assets/images/team/img-team-2.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	@media (max-width: 920px) {
		.img-container {
			height: 400px;
		}
	}

	@media (max-width: 750px) {
		.title-container {
			width: 100%;
		}
	}

	@media (max-width: 635px) {
		.img-container {
			height: 300px;
		}
	}

	@media (max-width: 495px) {
		.img-container {
			height: 225px;
		}
	}
</style>
