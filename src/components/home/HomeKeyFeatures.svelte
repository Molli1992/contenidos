<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import PcImg from '../../assets/images/pc-img.png';
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

<div class="body">
	<div class="container">
		{#if show}
			<div class="container-img" in:fly={{ x: -350, duration: 1600 }} bind:this={imgContainer}>
				<img src={PcImg} class="img" alt="pc-img" />
			</div>
		{:else}
			<div class="container-img" bind:this={imgContainer} style="height: 100%;"></div>
		{/if}

		<div class="container-text">
			<DashedSeparator />

			<h1 class="white-title">We Design For Preferred Futures</h1>
			<p class="white-text">
				Our services extend to every aspect of the project development process
			</p>

			<div class="icon-container">
				<div>
					<div class="icon"><FontAwesomeIcon icon={faCheck} /></div>
				</div>

				<p class="white-text">
					We immerse ourselves in the analytics of your business, in order to study all the
					subtleties and determine target.
				</p>
			</div>

			<div class="icon-container">
				<div>
					<div class="icon"><FontAwesomeIcon icon={faCheck} /></div>
				</div>

				<p class="white-text">
					We know how to create complex and intuitive interface systems that are enjoyable to use.
				</p>
			</div>

			<div class="icon-container">
				<div>
					<div class="icon"><FontAwesomeIcon icon={faCheck} /></div>
				</div>

				<p class="white-text">
					Our developer team easily subdue developments of any complexity. We dominate all the cycle
					of development.
				</p>
			</div>
		</div>
	</div>
</div>

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
		height: 375px;
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
			height: 275px;
		}
	}
</style>
