<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
	import CircleServices from './CircleServices.svelte';
</script>

<section class="body">
	<div class="container">
		<DashedSeparator />
		<h1 class="black-title">Cómo NTG Potencia Tus Proyectos</h1>
		<p class="black-text">
			Con décadas de experiencia en entretenimiento, publicidad y producción de eventos, en
			NTG anticipamos tendencias y transformamos ideas en espectáculos memorables. Nuestra
			innovación y compromiso nos posicionan como referentes en la industria.
		</p>

		<div>
			<div class="icon">
				<h1 class="number">500</h1>
				<FontAwesomeIcon icon={faPlus} />
			</div>

			<p class="black-text" style="font-weight: bold;">CLIENTES SATISFECHOS</p>
		</div>
	</div>

	<div class="container">
		<CircleServices />
	</div>
</section>

<style>
	.body {
		width: 100%;
		max-width: 1200px;
		display: flex;
		padding: 0px 25px;
	}

	.container {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.icon {
		display: flex;
		color: #ff7d00;
		font-size: 22px;
		gap: 5px;
	}

	.number {
		color: blueviolet;
		font-size: 48px;
	}

	@media (max-width: 1050px) {
		.body {
			flex-direction: column;
			gap: 75px;
			align-items: center;
		}

		.container {
			width: 100%;
			max-width: 750px;
		}
	}
</style>
