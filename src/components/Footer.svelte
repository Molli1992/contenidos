<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { contactInfo } from '../data/contactInfo';
	import SocialNetworks from './SocialNetworks.svelte';

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
			<div >
				{#if show}
					<div in:fly={{ x: -200, duration: 1000 }} bind:this={footerRef}>
						<a href="/">
							<h1 class="logo">NTG SA</h1>
						</a>
					</div>
				{:else}
					<div bind:this={footerRef}></div>
				{/if}
			</div>

			<p class="white-text">
				Desde sus inicios con Gerardo Sofovich y con más de dos décadas de trayectoria, NTG
				sigue reinventándose con nuevos formatos y experiencias en entretenimiento, publicidad y
				medios.
			</p>

			<SocialNetworks />
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
				<a href="/producciones" class="nav-link" class:active-link={currentPath === '/producciones'}
					>Producciones</a
				>
			</nav>
		</div>

		<div class="container">
			<h1 class="white-subtitle">Contacto</h1>
			<div>
				<p class="white-text">{contactInfo.email}</p>
				<p class="white-text">{contactInfo.phone}</p>
			</div>
		</div>
	</div>

	<div class="bottom-container">
		<p>Términos de uso | Política de Privacidad y Medio Ambiente</p>
		<p>Copyright © 2025 NTG SA. Todos los derechos reservados.</p>
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
		font-size: 42px;
		color: #ffffff;
		font-weight: bold;
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
