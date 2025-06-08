<script lang="ts">
	import {
		faTag,
		faGlobe,
		faChartLine,
		faRocket,
		faCog,
		faDesktop
	} from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const services = [
		{
			id: 1,
			media: 'Producción',
			icon: faDesktop,
			title: 'Producción Integral',
			text: 'Desarrollamos proyectos para teatro, TV, cine y eventos en vivo.'
		},
		{
			id: 2,
			media: 'Publicidad',
			icon: faTag,
			title: 'Publicidad Multicanal',
			text: 'Campañas en medios tradicionales, digitales y pantallas LED propias.'
		},
		{
			id: 3,
			media: 'Eventos',
			icon: faRocket,
			title: 'Organización de Eventos',
			text: 'Gestión y producción de espectáculos y festivales a gran escala.'
		},
		{
			id: 4,
			media: 'Televisión',
			icon: faGlobe,
			title: 'Producción Televisiva',
			text: 'Creación de programas icónicos con impacto nacional.'
		},
		{
			id: 5,
			media: 'Teatro',
			icon: faChartLine,
			title: 'Éxitos Teatrales',
			text: 'Obras premiadas y récords de recaudación en las principales plazas del país.'
		},
		{
			id: 6,
			media: 'Música',
			icon: faCog,
			title: 'Eventos Musicales',
			text: 'Coproducción de shows y festivales con artistas internacionales.'
		}
	];

	let selected = $state(services[5]);

	let show: boolean = $state(false);
	let circleContainer: HTMLDivElement | null = $state(null);

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

		if (circleContainer) observer.observe(circleContainer);
	});
</script>

<div class="body">
	{#if show}
		<div class="circle-container" in:fly={{ y: 350, duration: 1600 }}>
			{#each services as service, index}
				<button
					class="icon-circle {selected.id === service.id ? 'active' : ''}"
					style="--i: {index}"
					onmouseenter={() => (selected = service)}
					aria-label={service.title}
				>
					<FontAwesomeIcon icon={service.icon} />
				</button>
			{/each}

			<div class="center-content">
				<p class="category">{selected.media}</p>
				<h1>{selected.title}</h1>
				<p>{selected.text}</p>
			</div>
		</div>
	{:else}
		<div class="circle-container" bind:this={circleContainer}></div>
	{/if}
</div>

<style>
	.body {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.circle-container {
		position: relative;
		width: 400px;
		height: 400px;
	}

	.circle-container::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400px;
		height: 400px;
		border: 1px dashed #6e6e6e;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		z-index: 0;
	}

	.icon-circle {
		all: unset;
		position: absolute;
		top: 40.5%;
		left: 40.5%;
		width: 75px;
		height: 75px;
		background: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: rotate(calc(var(--i) * 60deg)) translate(195px) rotate(calc(var(--i) * -60deg));
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
		transition: all 0.3s ease;
		cursor: pointer;
		z-index: 1;
		font-size: 24px;
	}

	.icon-circle.active {
		background: linear-gradient(to right, #4d5dfb, #00c6ff);
		color: white;
		transform: rotate(calc(var(--i) * 60deg)) translate(195px) rotate(calc(var(--i) * -60deg))
			scale(1.1);
	}

	.icon-circle:hover {
		transform: rotate(calc(var(--i) * 60deg)) translate(195px) rotate(calc(var(--i) * -60deg))
			scale(1.05);
	}

	.center-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		max-width: 240px;
		width: 100%;
		z-index: 2;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.center-content .category {
		font-weight: bold;
		color: orange;
		font-size: 16px;
		text-transform: uppercase;
	}

	.center-content h1 {
		font-size: 24px;
		color: #252525;
	}

	.center-content p {
		font-size: 18px;
		color: #252525;
		line-height: 30px;
	}

	@media (max-width: 525px) {
		.circle-container {
			width: 300px;
			height: 300px;
		}

		.circle-container::before {
			width: 300px;
			height: 300px;
		}

		.icon-circle {
			top: 42%;
			left: 42%;
			width: 50px;
			height: 50px;
			transform: rotate(calc(var(--i) * 60deg)) translate(150px) rotate(calc(var(--i) * -60deg));
			font-size: 18px;
		}

		.icon-circle.active {
			color: white;
			transform: rotate(calc(var(--i) * 60deg)) translate(150px) rotate(calc(var(--i) * -60deg))
				scale(1.1);
		}

		.icon-circle:hover {
			transform: rotate(calc(var(--i) * 60deg)) translate(150px) rotate(calc(var(--i) * -60deg))
				scale(1.05);
		}

		.center-content .category {
			font-size: 14px;
		}

		.center-content h1 {
			font-size: 20px;
		}

		.center-content p {
			font-size: 16px;
		}
	}
</style>
