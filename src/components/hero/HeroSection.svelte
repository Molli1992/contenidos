<script lang="ts">
	import { onMount } from 'svelte';
	import { openWhatsapp, openInstagram } from '../../utils/socialNetworks';
	import { fly } from 'svelte/transition';

	let { imageUrl, title, description }: { imageUrl: string; title: string; description: string } =
		$props();

	const backgroundGradient: string =
		'linear-gradient(to bottom, rgba(25, 25, 70, 0.4), rgba(25, 25, 70, 0.4))';

	let show: boolean = $state(false);

	onMount(() => {
		show = true;
	});
</script>

<section class="hero-section" style="background-image: {backgroundGradient}, url('{imageUrl}');">
	{#if show}
		<div class="hero-content">
			<div in:fly={{ y: -50, duration: 600 }}>
				<h1>{title}</h1>
			</div>

			<div in:fly={{ x: -100, duration: 600, delay: 200 }}>
				<p class="white-text">{description}</p>
			</div>

			<div class="hero-buttons" in:fly={{ y: 50, duration: 600, delay: 400 }}>
				<button onclick={openWhatsapp} class="whatsapp button"> WhatsApp </button>
				<button onclick={openInstagram} class="instagram button"> Instagram </button>
			</div>
		</div>
	{/if}
</section>

<style>
	.hero-section {
		width: 100%;
		height: calc(90vh - 105px);
		display: flex;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		margin-top: 105px;
	}

	.hero-content {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 10px;
		text-align: center;
		color: #ffffff;
		gap: 20px;
	}

	.hero-content h1 {
		font-size: 48px;
		width: 100%;
		max-width: 1200px;
	}

	.hero-content p {
		width: 100%;
		max-width: 700px;
	}

	.hero-buttons {
		display: flex;
		gap: 25px;
	}

	.button {
		all: unset;
		cursor: pointer;
		padding: 15px;
		font-size: 22px;
		border-radius: 10px;
		text-decoration: none;
		display: inline-block;
		border: 1px solid transparent;
		transition:
			background-color 0.8s ease,
			border-color 0.8s ease;
	}

	.whatsapp {
		background-color: #25d366;
	}

	.whatsapp:hover {
		background-color: transparent;
		border-color: #25d366;
	}

	.instagram {
		background-color: #833ab4;
	}

	.instagram:hover {
		background-color: transparent;
		border-color: #833ab4;
	}

	@media (max-width: 700px) {
		.hero-content h1 {
			font-size: 38px;
		}

		.hero-content p {
			font-size: 16px;
		}

		.button {
			font-size: 20px;
		}
	}
</style>
