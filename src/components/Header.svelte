<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';

	let currentPath: string = $derived(page.url.pathname);
	let scrolled: boolean = $state(false);
	let menu: boolean = $state(false);
	const logoWhite: string =
		'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/logo-white.png';
	const logoDark: string = 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/logo-dark.png';

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const toggleMenu = () => {
		menu = !menu;
	};
</script>

<header class="header" class:scrolled>
	<a href="/">
		<img src={scrolled ? logoDark : logoWhite} alt="Company Logo" class="logo" />
	</a>

	<nav class="center-section">
		<a href="/" class="nav-link" class:active-link={currentPath === '/'}>Home</a>
		<a href="/about" class="nav-link" class:active-link={currentPath === '/about'}>About us</a>
		<a href="/services" class="nav-link" class:active-link={currentPath === '/services'}>Services</a
		>
		<a href="/team" class="nav-link" class:active-link={currentPath === '/team'}>Team</a>
		<a href="/contact" class="nav-link" class:active-link={currentPath === '/contact'}>Contacts</a>
	</nav>

	<div class="right-section">
		<p>+8 (123) 985 789</p>
	</div>

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
				onclick={() => (menu = false)}>Home</a
			>
			<a
				href="/about"
				class="nav-link"
				class:active-link={currentPath === '/about'}
				onclick={() => (menu = false)}>About us</a
			>
			<a
				href="/services"
				class="nav-link"
				class:active-link={currentPath === '/services'}
				onclick={() => (menu = false)}>Services</a
			>
			<a
				href="/team"
				class="nav-link"
				class:active-link={currentPath === '/team'}
				onclick={() => (menu = false)}>Team</a
			>
			<a
				href="/contact"
				class="nav-link"
				class:active-link={currentPath === '/contact'}
				onclick={() => (menu = false)}>Contacts</a
			>
			<p>+8 (123) 985 789</p>
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
		z-index: 1000;
		background-color: transparent;
		border-bottom: 1px solid #ffffff;
	}

	.scrolled {
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

	.header.scrolled .center-section {
		color: #000000;
	}

	.nav-link {
		font-size: 16px;
		position: relative;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 3px;
		background-color: #ffffff;
		transition: width 0.3s ease-out;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.nav-link.active-link::after {
		width: 100%;
	}

	.header.scrolled .nav-link::after {
		background-color: #000000;
	}

	.right-section {
		border-left: 1px solid #ffffff;
		padding-left: 20px;
	}

	.header.scrolled .right-section {
		color: #000000;
		border-left: 1px solid #000000;
	}

	.right-section p {
		font-size: 20px;
	}

	.menu-toggle {
		display: none;
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: #ffffff;
		font-size: 42px;
	}

	.header.scrolled .menu-toggle {
		color: #000000;
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
	}

	.header.scrolled .menu {
		border-top: 1px solid #000000;
	}

	@media (max-width: 975px) {
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
