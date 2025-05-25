<script lang="ts">
	import DashedSeparator from '../DashedSeparator.svelte';
	import Slider from '../Slider.svelte';
</script>

<div class="body">
	<div class="container">
		<div class="text-container">
			<DashedSeparator />
			<h1 class="black-title">What Clients Say About Us</h1>
			<p class="black-text">
				Seofy`s clients and their results are the best proof that our methodologies work. But we’ve
				also received numerous awards and praise from the media and our peers.
			</p>
		</div>

		<div class="review-container">
			<Slider />
		</div>
	</div>
</div>

<style>
	.body {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 25px;
	}

	.container {
		width: 100%;
		max-width: 1200px;
		display: flex;
		gap: 30px;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 30%;
	}

	.review-container {
		display: flex;
		width: 70%;
	}

	@media (max-width: 1000px) {
		.container {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.text-container {
			width: 500px;
		}

		.review-container {
			width: 750px;
		}
	}

	@media (max-width: 775px) {
		.review-container {
			width: 100%;
		}
	}

	@media (max-width: 600px) {
		.text-container {
			width: 100%;
		}
	}
</style>
