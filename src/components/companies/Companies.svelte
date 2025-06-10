<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import Slider from '../Slider.svelte';
</script>

<section class="body">
	<DashedSeparator />

	<div class="container">
		<Slider companies={true} />
	</div>
</section>

<style>
	.body {
		width: 100%;
		max-width: 1200px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0px 25px;
		gap: 50px;
	}

	.container {
		width: 100%;
	}
</style>
