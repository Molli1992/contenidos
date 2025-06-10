<script lang="ts">
	let { imageUrl }: { imageUrl: string } = $props();
</script>

<div class="card">
	<img src={imageUrl} alt="company" class="img" />
</div>

<style>
	.card {
		width: 100%;
		max-width: 300px;
		height: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img {
		width: 100%;
		height: 100%;
	}
</style>
