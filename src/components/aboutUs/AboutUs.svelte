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

<div class="body">
	<div class="container">
		<DashedSeparator />
		<h1 class="black-title">The #1 SEO Services Company</h1>
		<p class="black-text">
			We are an experienced and talented team of passionate consultants who live and breathe search
			engine.
		</p>
		<p class="black-text">
			We have developed search strategies for leading brands to small and medium sized businesses
			across many industries in the UK and worldwide.
		</p>
		<BlueButton value="CONTACT US" onclick={routeContact} />
	</div>

	{#if show}
		<div
			class="container"
			style="align-items: center;"
			in:fly={{ x: 350, duration: 1600 }}
			bind:this={imgContainer}
		>
			<img
				src="https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/about_us.jpg"
				alt="about us"
				class="img"
			/>
		</div>
	{:else}
		<div class="container" bind:this={imgContainer} style="height: 100%;"></div>
	{/if}
</div>

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
		width: 450px;
		height: 450px;
	}

	@media (max-width: 950px) {
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

	@media (max-width: 525px) {
		.img {
			width: 100%;
			height: auto;
		}
	}
</style>
