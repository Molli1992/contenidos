<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import BlueButton from '../BlueButton.svelte';
	import { goto } from '$app/navigation';

	const routeContact = () => {
		goto('/contact');
	};
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

	<div class="container" style="align-items: center;">
		<img
			src="https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/about_us.jpg"
			alt="about us"
			class="img"
		/>
	</div>
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
