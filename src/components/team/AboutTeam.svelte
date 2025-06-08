<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import SkillBar from '../../components/SkillBar.svelte';
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

<section class="container">
	{#if show}
		<div class="sub-container" in:fly={{ x: -350, duration: 1600 }} bind:this={imgContainer}>
			<div class="img"></div>
		</div>
	{:else}
		<div class="sub-container" bind:this={imgContainer} style="height: 100%;">
			<div class="img" style="background-image: url('')"></div>
		</div>
	{/if}

	<div class="sub-container">
		<DashedSeparator />
		<h1 class="black-title">Nuestro Equipo y Experiencia</h1>
		<p class="black-text">
			Contamos con un equipo de creativos, productores y profesionales dedicados a planificar y
			ejecutar proyectos que conectan con el público y potencian la visibilidad de marcas y eventos.
		</p>

		<div class="skillbar-container">
			<SkillBar
				label="Producción de Espectáculos"
				percentage={90}
				gradient="linear-gradient(to right, #facc15, #f97316)"
			/>

			<SkillBar
				label="Publicidad y Medios"
				percentage={85}
				gradient="linear-gradient(to right, #60a5fa, #1e3a8a)"
			/>

			<SkillBar
				label="Gestión de Eventos"
				percentage={80}
				gradient="linear-gradient(to right, #67e8f9, #3b82f6)"
			/>
		</div>
	</div>
</section>

<style>
	.container {
		width: 100%;
		max-width: 1200px;
		padding: 0px 25px;
		display: flex;
		gap: 50px;
	}

	.sub-container {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.img {
		width: 100%;
		height: 500px;
		background-image: url('../../assets/images/team/img-team-1.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.skillbar-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	@media (max-width: 900px) {
		.container {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.sub-container {
			width: 650px;
		}
	}

	@media (max-width: 700px) {
		.sub-container {
			width: 100%;
		}
	}

	@media (max-width: 500px) {
		.img {
			height: 400px;
		}
	}

	@media (max-width: 400px) {
		.img {
			height: 350px;
		}
	}
</style>
