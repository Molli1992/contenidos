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

<div class="container">
	{#if show}
		<div class="sub-container" in:fly={{ x: -350, duration: 1600 }} bind:this={imgContainer}>
			<img
				src="https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/section_our_team_01.png"
				alt="team-img"
				class="img"
			/>
		</div>
	{:else}
		<div class="sub-container" bind:this={imgContainer} style="height: 100%;"></div>
	{/if}

	<div class="sub-container">
		<DashedSeparator />
		<h1 class="black-title">Skilled Team of Creators</h1>
		<p class="black-text">
			From dedicated SEO strategists to creative web designers, we have the people who can plan and
			execute the right plan for your company.
		</p>

		<div class="skillbar-container">
			<SkillBar
				label="SEO"
				percentage={70}
				gradient="linear-gradient(to right, #facc15, #f97316)"
			/>

			<SkillBar
				label="SMM"
				percentage={93}
				gradient="linear-gradient(to right, #60a5fa, #1e3a8a)"
			/>

			<SkillBar
				label="PPC"
				percentage={53}
				gradient="linear-gradient(to right, #67e8f9, #3b82f6)"
			/>
		</div>
	</div>
</div>

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
		background-color: #f5f5f5;
		padding: 20px;
		border-radius: 20px;
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
