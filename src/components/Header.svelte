<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
	import { faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import { openWhatsapp, openInstagram, openYouTube } from '../utils/socialNetworks';
	import Logo from '../assets/logo/logo-contenidos.png';
	import SocialNetworks from './SocialNetworks.svelte';

	let currentPath: string = $derived(page.url.pathname);
	let scrolled: boolean = $state(false);
	let menu: boolean = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const toggleMenu = () => {
		menu = !menu;
	};
</script>

<header class="header">
	<a href="/">
		<img src={Logo} alt="Company Logo" class="logo" />
	</a>

	<nav class="center-section">
		<a href="/" class="nav-link" class:active-link={currentPath === '/'}>Inicio</a>
		<a href="/about" class="nav-link" class:active-link={currentPath === '/about'}>Nosotros</a>
		<a href="/services" class="nav-link" class:active-link={currentPath === '/services'}
			>Servicios</a
		>
		<a href="/team" class="nav-link" class:active-link={currentPath === '/team'}>Equipo</a>
		<a href="/contact" class="nav-link" class:active-link={currentPath === '/contact'}>Contacto</a>
	</nav>

	<nav class="right-section">
		<a
			href="/producciones"
			class="nav-link"
			class:active-link={currentPath === '/producciones'}
			style="font-size: 22px;">Producciones</a
		>
	</nav>

	<button class="menu-toggle" onclick={toggleMenu}>
		{#if !menu}
			<FontAwesomeIcon icon={faBars} />
		{:else}
			<FontAwesomeIcon icon={faXmark} />
		{/if}
	</button>

	{#if menu}
		<div class="menu">
			<a
				href="/"
				class="nav-link"
				class:active-link={currentPath === '/'}
				onclick={() => (menu = false)}>Inicio</a
			>
			<a
				href="/about"
				class="nav-link"
				class:active-link={currentPath === '/about'}
				onclick={() => (menu = false)}>Nosotros</a
			>
			<a
				href="/services"
				class="nav-link"
				class:active-link={currentPath === '/services'}
				onclick={() => (menu = false)}>Servicios</a
			>
			<a
				href="/team"
				class="nav-link"
				class:active-link={currentPath === '/team'}
				onclick={() => (menu = false)}>Equipo</a
			>
			<a
				href="/contact"
				class="nav-link"
				class:active-link={currentPath === '/contact'}
				onclick={() => (menu = false)}>Contacto</a
			>
			<a
				href="/producciones"
				class="nav-link"
				class:active-link={currentPath === '/producciones'}
				onclick={() => (menu = false)}>Producciones</a
			>

			<SocialNetworks />
		</div>
	{/if}
</header>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 25px 50px;
		z-index: 9999;
		background-color: #ffffff;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		border-bottom: none;
	}

	.logo {
		height: 50px;
	}

	.center-section,
	.right-section {
		color: #ffffff;
		font-weight: bold;
	}

	.center-section {
		display: flex;
		gap: 40px;
	}

	.nav-link {
		font-size: 16px;
		position: relative;
		color: #000000;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 3px;
		background-color: #000000;
		transition: width 0.3s ease-out;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.nav-link.active-link::after {
		width: 100%;
		background-color: #000000;
	}

	.right-section {
		padding-left: 20px;
		color: #000000;
		border-left: 1px solid #000000;
	}

	.menu-toggle {
		display: none;
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: #000000;
		font-size: 42px;
	}

	.menu {
		display: none;
		flex-direction: column;
		gap: 20px;
		padding: 30px 15px;
		position: fixed;
		top: 104px;
		left: 0;
		width: 100vw;
		height: calc(100vh - 104px);
		background-color: #ffffff;
		z-index: 999;
		color: #000000;
		font-weight: bold;
		font-size: 16px;
		border-top: 1px solid #000000;
	}

	@media (max-width: 1000px) {
		.header {
			padding: 25px;
		}
	}

	@media (max-width: 925px) {
		.center-section {
			display: none;
		}

		.nav-link::after {
			background-color: #000000;
		}

		.nav-link:hover::after {
			width: 100px;
		}

		.nav-link.active-link::after {
			width: 100px;
		}

		.right-section {
			display: none;
		}

		.menu-toggle {
			display: flex;
		}

		.menu {
			display: flex;
		}
	}
</style>
