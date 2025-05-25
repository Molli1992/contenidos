<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import CardFeatures from './CardFeatures.svelte';
	import { faMagnifyingGlass, faRocket, faKey } from '@fortawesome/free-solid-svg-icons'; // Importa los nuevos iconos

	const arrayFeatures = [
		{
			icon: faMagnifyingGlass,
			title: 'Branding',
			description:
				'If you need branding, we will create a consistent visual identification of your service.'
		},
		{
			icon: faRocket,
			title: 'Web Design',
			description:
				'We start from structuring information architecture and mapping out functionalities (UX).'
		},
		{
			icon: faKey,
			title: 'Development',
			description:
				'At this stage we have all designs approved. Our main focus is to create secure & clean code.'
		}
	];
</script>

<div class="body">
	<DashedSeparator />
	<div class="container-title">
		<h1 class="black-title">Our Best Features</h1>
		<p class="black-text">
			We help create succsessfull digital products, for any screenand for ever imagenably user and
			many iteresting things for us
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

	@media (max-width: 1225px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
