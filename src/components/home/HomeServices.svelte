<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import HomeServicesCard from './HomeServicesCard.svelte';
	import {
		faChartSimple,
		faGear,
		faBullseye,
		faChartPie,
		faVideo,
		faBoxesStacked
	} from '@fortawesome/free-solid-svg-icons';

	const arrayServices = [
		{
			icon: faChartSimple,
			title: 'Strategy',
			description:
				"We analyse your website's structure, internal architecture & other key elements that are weighted."
		},
		{
			icon: faGear,
			title: 'Development',
			description:
				'At this stage we have all designs approved. Our main focus is to create secure & clean code.'
		},
		{
			icon: faBullseye,
			title: 'Branding & Design',
			description:
				'We start from structuring information architecture and mapping out functionalities (UX).'
		},
		{
			icon: faChartPie,
			title: 'Social & Content',
			description:
				'Our team of creatives, designers & developers work alongside our SEO & content teams to ideate.'
		},
		{
			icon: faVideo,
			title: 'Video & Motion Graphics',
			description:
				'While the search engines are still in their infancy in understanding & using social signals algorithmically.'
		},
		{
			icon: faBoxesStacked,
			title: 'Studio & Production',
			description:
				'We love data and provide monthly reporting on visibility, analytics, conversions & revenue.'
		}
	];
</script>

<div class="body">
	<DashedSeparator />
	<div class="container-title">
		<h1 class="black-title">What We Offer You</h1>
		<p class="black-text">
			We help create succsessfull digital products, for any screen and for ever imagenably user
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
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 725px) {
		.services-grid {
			display: grid;
			grid-template-columns: 1fr;
		}
	}
</style>
