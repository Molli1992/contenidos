<script lang="ts">
	import BlueButton from '../../components/BlueButton.svelte';
	import DashedSeparator from '../DashedSeparator.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const routeAboutUs = () => {
		goto('/about');
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

<div class="flex-container">
	<div class="text-container">
		<div class="texts">
			<DashedSeparator />
			<h1 class="black-title">Creatividad, espectáculo y legado en la escena digital</h1>

			<p class="black-text">
				Contenidos es una empresa creada por Gerardo Sofovich. En el teatro rompió récords de
				recaudación en calle Corrientes, en Mar del Plata y en Villa Carlos Paz. “El champán las
				pone mimosas” —estrenada en los años '70 y reversionada durante este siglo— es su carta de
				presentación ineludible.
			</p>
			<p class="black-text">
				También supo llevar sus éxitos televisivos, como Operación Ja Ja, Polémica en el bar y La
				Noche del Domingo. En el cine, produjo clásicos de la comedia como Los caballeros de la cama
				redonda, Las minas de Salomón Rey, Me sobra un marido y Camarero nocturno en Mar del Plata.
			</p>

			<BlueButton value="LEER MAS" onclick={routeAboutUs} />
		</div>
	</div>

	{#if show}
		<div class="img-container" in:fly={{ y: 350, duration: 1600 }} bind:this={imgContainer}>
			<div class="img"></div>
		</div>
	{:else}
		<div class="img-container" bind:this={imgContainer} style="height: 100%;"></div>
	{/if}
</div>

<style>
	.flex-container {
		width: 100%;
		max-width: 1200px;
		display: flex;
		justify-content: center;
		gap: 100px;
		padding: 0px 25px;
	}

	.text-container {
		width: 50%;
		display: flex;
		justify-content: center;
	}

	.texts {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.img-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 450px;
		width: 50%;
	}
	.img {
		height: 100%;
		width: 100%;
		background-image: url('https://wgl-dsites.net/seofy/wp-content/uploads/2019/05/it_agency_layer_1.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	@media (max-width: 1250px) {
		.flex-container {
			gap: 50px;
		}
	}

	@media (max-width: 950px) {
		.flex-container {
			flex-direction: column;
		}

		.text-container {
			width: 100%;
		}

		.texts {
			width: 100%;
			max-width: 750px;
		}

		.img-container {
			width: 100%;
			height: 400px;
		}

		.img {
			width: 500px;
		}
	}

	@media (max-width: 600px) {
		.img {
			width: 100%;
		}
	}
</style>
