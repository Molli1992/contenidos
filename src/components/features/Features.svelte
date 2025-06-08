<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import CardFeatures from './CardFeatures.svelte';
	import { faMagnifyingGlass, faRocket, faKey } from '@fortawesome/free-solid-svg-icons';

	const arrayFeatures = [
		{
			icon: faMagnifyingGlass,
			title: 'Estrategia de Contenidos',
			description:
				'Analizamos tu mercado y público para definir mensajes claros y efectivos que posicionen tu marca.'
		},
		{
			icon: faRocket,
			title: 'Producción Multimedia',
			description:
				'Creamos videos, podcasts y materiales visuales que capturan la atención y comunican con impacto.'
		},
		{
			icon: faKey,
			title: 'Optimización y Difusión',
			description:
				'Implementamos técnicas para maximizar el alcance y la interacción en plataformas digitales y redes sociales.'
		}
	];
</script>

<section class="body">
	<DashedSeparator />
	<div class="container-title">
		<h1 class="black-title">Nuestras Principales Fortalezas</h1>
		<p class="black-text">
			Te ayudamos a crear contenidos estratégicos y creativos que conectan con tu audiencia y
			potencian tu marca en todos los canales.
		</p>
	</div>

	<div class="services-grid">
		{#each arrayFeatures as features (features.title)}
			<CardFeatures
				icon={features.icon}
				title={features.title}
				description={features.description}
			/>
		{/each}
	</div>
</section>

<style>
	.body {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 50px;
		padding: 0px 25px;
	}

	.container-title {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		text-align: center;
	}

	.services-grid {
		width: 100%;
		max-width: 1200px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
		gap: 25px;
	}

	@media (max-width: 1000px) {
		.services-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 700px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
