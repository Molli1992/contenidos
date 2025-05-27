<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import Slider from '../Slider.svelte';
</script>

<div class="body">
	<div class="container">
		<DashedSeparator />
		<h1 class="black-title">Enjoy Our Amazing Projects</h1>
		<p class="black-text">
			View some of our work and case studies for clients. We will work to deliver that strategy by
			building out your existing campaigns, or establishing accounts at new networks. It’s important
			to us that you own the accounts, and that you have a relationship with the network owners.
		</p>
	</div>

	<div class="container">
		<Slider projects={true} />
	</div>
</div>

<style>
	.body {
		width: 100%;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		padding: 0px 25px;
		gap: 50px;
	}

	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
</style>
