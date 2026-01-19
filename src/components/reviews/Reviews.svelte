<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import Slider from '../Slider.svelte';
</script>

<section class="body">
	<div class="container">
		<div class="text-container">
			<DashedSeparator />
			<h1 class="black-title">Lo Que Dicen de Nosotros</h1>
			<p class="black-text">
				El reconocimiento del público, los medios y nuestros colaboradores avalan el trabajo de
				NTG a lo largo de los años. Nuestra historia se construye con cada espectáculo,
				programa y evento que deja huella.
			</p>
		</div>

		<div class="review-container">
			<Slider reviews={true} />
		</div>
	</div>
</section>

<style>
	.body {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 25px;
	}

	.container {
		width: 100%;
		max-width: 1200px;
		display: flex;
		gap: 30px;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 30%;
	}

	.review-container {
		display: flex;
		width: 70%;
	}

	@media (max-width: 1000px) {
		.container {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.text-container {
			width: 500px;
		}

		.review-container {
			width: 750px;
		}
	}

	@media (max-width: 775px) {
		.review-container {
			width: 100%;
		}
	}

	@media (max-width: 600px) {
		.text-container {
			width: 100%;
		}
	}
</style>
