<script lang="ts">
	let { youtubeId, title, desc }: { youtubeId: string; title: string; desc: string } = $props();
</script>

<div class="card-container">
	<div class="video-wrapper">
		<iframe
			src="https://www.youtube.com/embed/{youtubeId}"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="YouTube video player"
			class="video"
		></iframe>
	</div>

	<div>
		<h2 class="black-subtitle">{title}</h2>
		<p class="black-text">{desc}</p>
	</div>
</div>

<style>
	.card-container {
		width: 100%;
		max-width: 400px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.video-wrapper {
		width: 100%;
		height: 200px;
	}

	.video {
		width: 100%;
		height: 100%;
	}
</style>
