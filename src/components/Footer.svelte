<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faWhatsapp,
		faInstagram,
		faYoutube
	} from '@fortawesome/free-brands-svg-icons';
	import { openWhatsapp, openInstagram,  openYouTube } from '../utils/socialNetworks';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import Logo from '../assets/logo/logo-contenidos-sin-fondo.png';
	import { page } from '$app/state';

	let show: boolean = $state(false);
	let footerRef: HTMLDivElement | null = $state(null);
	let currentPath: string = $derived(page.url.pathname);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						show = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (footerRef) observer.observe(footerRef);
	});

	onMount(() => {
		afterNavigate(() => {
			show = false;
		});
	});
</script>

<footer class="footer">
	<div class="main-container">
		<div class="container">
			<div bind:this={footerRef}>
				{#if show}
					<div in:fly={{ x: -200, duration: 1000 }} bind:this={footerRef}>
						<a href="/">
							<img src={Logo} alt="Company Logo" class="logo" />
						</a>
					</div>
				{:else}
					<div bind:this={footerRef}></div>
				{/if}
			</div>

			<p class="white-text">
				Desde sus inicios con Gerardo Sofovich y con más de dos décadas de trayectoria, Contenidos
				sigue reinventándose con nuevos formatos y experiencias en entretenimiento, publicidad y
				medios.
			</p>

			<div class="container-icons">
				<button onclick={openWhatsapp}>
					<FontAwesomeIcon icon={faWhatsapp} />
				</button>
				<button onclick={openInstagram}>
					<FontAwesomeIcon icon={faInstagram} />
				</button>
				<button onclick={openYouTube}>
					<FontAwesomeIcon icon={faYoutube} />
				</button>
			</div>
		</div>

		<div class="container">
			<h1 class="white-subtitle">Enlaces</h1>
			<nav class="center-section">
				<a href="/" class="nav-link" class:active-link={currentPath === '/'}>Inicio</a>
				<a href="/about" class="nav-link" class:active-link={currentPath === '/about'}>Nosotros</a>
				<a href="/services" class="nav-link" class:active-link={currentPath === '/services'}
					>Servicios</a
				>
				<a href="/team" class="nav-link" class:active-link={currentPath === '/team'}>Equipo</a>
				<a href="/contact" class="nav-link" class:active-link={currentPath === '/contact'}
					>Contacto</a
				>
			</nav>
		</div>

		<div class="container">
			<h1 class="white-subtitle">Contacto</h1>
			<div>
				<p class="white-text">felipe.blaksley@hotmail.com</p>
				<p class="white-text">+54 9 11 2458-6710</p>
			</div>
		</div>
	</div>

	<div class="bottom-container">
		<p>Términos de uso | Política de Privacidad y Medio Ambiente</p>
		<p>Copyright © 2025 Contenidos. Todos los derechos reservados.</p>
	</div>
</footer>

<style>
	.footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0px 15px;
		background-color: darkblue;
	}

	.main-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		width: 1200px;
		padding: 50px 0px;
		place-items: center;
		align-items: start;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.logo {
		width: 250px;
		filter: brightness(1) invert(1);
	}

	.container-icons {
		display: flex;
		gap: 15px;
	}

	.container-icons button {
		all: unset;
		cursor: pointer;
		background-color: #ffffff;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: blueviolet;
		font-size: 18px;
	}

	.container-icons button:hover {
		background-color: blueviolet;
		color: #ffffff;
	}

	.container h1 {
		margin-bottom: 5px;
	}

	.center-section {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.nav-link {
		font-size: 18px;
		color: #ffffff;
	}

	.active-link {
		color: gray;
	}

	.bottom-container {
		width: 1200px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid rgba(150, 150, 150, 0.5);
		padding: 15px;
		text-align: center;
	}

	.bottom-container p {
		color: #ffffff;
		font-size: 14px;
	}

	@media (max-width: 1250px) {
		.footer {
			padding: 0px 75px;
		}
		.main-container {
			grid-template-columns: 1fr;
			width: 100%;
			padding: 75px 0px;
			gap: 50px;
		}

		.container {
			width: 100%;
		}

		.bottom-container {
			width: 100%;
		}
	}

	@media (max-width: 1025px) {
		.bottom-container {
			flex-direction: column;
			gap: 10px;
		}
	}

	@media (max-width: 725px) {
		.footer {
			padding: 0px 30px;
		}
		.main-container {
			padding: 50px 0px;
		}
	}
</style>
