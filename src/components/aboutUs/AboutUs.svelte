<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import BlueButton from '../BlueButton.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const routeContact = () => {
		goto('/contact');
	};

	let show: boolean = $state(false);
	let imgContainer: HTMLDivElement | null = $state(null);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						show = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1
			}
		);

		if (imgContainer) observer.observe(imgContainer);
	});
</script>

<section class="body">
	<div class="container">
		<DashedSeparator />
		<h1 class="black-title">El legado de una empresa de familia, reinventado en lo digital</h1>
		<p class="black-text">
			Contenidos se dedica a la producción, realización y comercialización de espectáculos. También
			ofrecemos servicios de publicidad en todos los medios y contamos con Pantallas LED propias de
			vía pública en lugares estratégicos de CABA.
		</p>

		<BlueButton value="CONTACTO" onclick={routeContact} />
	</div>

	{#if show}
		<div
			class="container"
			style="align-items: center;"
			in:fly={{ y: 350, duration: 1600 }}
			bind:this={imgContainer}
		>
			<div class="img"></div>
		</div>
	{:else}
		<div class="container" bind:this={imgContainer} style="height: 100%;">
			<div class="img" style="background-image: url('')"></div>
		</div>
	{/if}
</section>

<style>
	.body {
		width: 100%;
		max-width: 1200px;
		padding: 0px 25px;
		display: flex;
		gap: 50px;
	}

	.container {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.img {
		width: 500px;
		height: 450px;
		background-image: url('../../assets/images/aboutUs/img-nosotros-1.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	@media (max-width: 975px) {
		.body {
			flex-direction: column;
			align-items: center;
			gap: 75px;
		}

		.container {
			width: 100%;
			max-width: 700px;
		}
	}

	@media (max-width: 650px) {
		.body {
			padding: 0px 15px;
		}
	}

	@media (max-width: 550px) {
		.img {
			width: 100%;
			height: 350px;
		}
	}

	@media (max-width: 425px) {
		.img {
			height: 325px;
		}
	}
</style>
