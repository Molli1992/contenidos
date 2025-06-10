<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

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
		{#if show}
			<div class="container-img" in:fly={{ x: -350, duration: 1600 }} bind:this={imgContainer}>
				<div class="img"></div>
			</div>
		{:else}
			<div class="container-img" bind:this={imgContainer} style="height: 100%;">
				<div class="img" style="background-image: url('')"></div>
			</div>
		{/if}

		<div class="container-text">
			<DashedSeparator />

			<h1 class="white-title">Potenciamos tu marca en la vía pública</h1>
			<p class="white-text">
				Publicitamos en pantallas LED de alto impacto para garantizar presencia constante y conexión
				directa con tu audiencia.
			</p>

			<div class="icon-container">
				<div>
					<div class="icon"><FontAwesomeIcon icon={faCheck} /></div>
				</div>

				<p class="white-text">
					Estudiamos puntos estratégicos de alto tráfico para maximizar la visibilidad de tu
					mensaje.
				</p>
			</div>

			<div class="icon-container">
				<div>
					<div class="icon"><FontAwesomeIcon icon={faCheck} /></div>
				</div>

				<p class="white-text">
					Creamos contenidos visuales atractivos y dinámicos adaptados a pantallas LED urbanas.
				</p>
			</div>

			<div class="icon-container">
				<div>
					<div class="icon"><FontAwesomeIcon icon={faCheck} /></div>
				</div>

				<p class="white-text">
					Integramos tecnología, creatividad y estrategia para campañas memorables en la vía
					pública.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.body {
		width: 100%;
		background-color: darkblue;
		padding: 100px 25px;
		display: flex;
		justify-content: center;
	}

	.container {
		width: 100%;
		max-width: 1200px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 50px;
	}

	.container-img {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img {
		width: 100%;
		height: 425px;
		background-image: url('../../assets/images/home/img-pantalla.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.container-text {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.icon-container {
		display: flex;
		align-items: center;
		gap: 25px;
	}

	.icon {
		color: #ffffff;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: blueviolet;
		border-radius: 50%;
		font-size: 22px;
	}

	@media (max-width: 1250px) {
		.container {
			flex-direction: column;
		}

		.container-img {
			width: 100%;
			max-width: 650px;
		}

		.container-text {
			width: 100%;
			max-width: 650px;
		}
	}

	@media (max-width: 650px) {
		.icon-container {
			gap: 15px;
		}

		.icon {
			width: 40px;
			height: 40px;
			font-size: 18px;
		}
	}

	@media (max-width: 500px) {
		.img {
			height: 325px;
		}
	}
</style>
