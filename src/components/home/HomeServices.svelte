<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import HomeServicesCard from './HomeServicesCard.svelte';
	import {
		faTv,
		faBullhorn,
		faTicketAlt,
		faTheaterMasks,
		faMusic,
		faVideo
	} from '@fortawesome/free-solid-svg-icons';

	const arrayServices = [
		{
			id: 1,
			icon: faTv,
			title: 'Producción de Contenidos',
			description:
				'Diseñamos y producimos formatos originales para TV, plataformas y medios digitales.'
		},
		{
			id: 2,
			icon: faBullhorn,
			title: 'Publicidad Exterior',
			description: 'Difundí tu marca en pantallas LED ubicadas estratégicamente en CABA.'
		},
		{
			id: 3,
			icon: faTicketAlt,
			title: 'Gestión de Espectáculos',
			description: 'Planificamos y ejecutamos shows, giras y temporadas teatrales con alto impacto.'
		},
		{
			id: 4,
			icon: faTheaterMasks,
			title: 'Producción Escénica',
			description: 'Desde el guión hasta el escenario: realizamos obras teatrales que marcan época.'
		},
		{
			id: 5,
			icon: faMusic,
			title: 'Festivales y Música',
			description: 'Organizamos eventos musicales y coproducciones con artistas de renombre.'
		},
		{
			id: 6,
			icon: faVideo,
			title: 'Desarrollo Audiovisual',
			description: 'Transformamos ideas en piezas audiovisuales de calidad profesional.'
		}
	];
</script>

<div class="body">
	<DashedSeparator />
	<div class="container-title">
		<h1 class="black-title">Lo Que Hacemos en Contenidos</h1>
		<p class="black-text">
			Creamos experiencias inolvidables en teatro, televisión, cine y eventos. Ofrecemos soluciones
			integrales que combinan creatividad, técnica y producción para cada proyecto.
		</p>
	</div>

	<div class="services-grid">
		{#each arrayServices as service (service.title)}
			<HomeServicesCard
				icon={service.icon}
				title={service.title}
				description={service.description}
			/>
		{/each}
	</div>
</div>

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

	.container-title p {
		width: 100%;
		max-width: 800px;
	}

	.services-grid {
		width: 100%;
		max-width: 1200px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
		gap: 50px;
	}

	@media (max-width: 1175px) {
		.services-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 725px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
