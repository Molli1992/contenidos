<script lang="ts">
	let { imageUrl, name, service }: { imageUrl: string; name: string; service: string } = $props();
</script>

<div class="body">
	<div class="container-img">
		<img src={imageUrl} alt="proyecto" class="img" />
	</div>
	<div class="container">
		<h1>{name}</h1>
		<p>{service}</p>
	</div>
</div>

<style>
	.body {
		width: 100%;
		max-width: 350px;
		height: 400px;
		position: relative;
	}

	.container-img {
		width: 100%;
		height: 100%;
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.container {
		position: absolute;
		width: 300px;
		background-color: #f2f2f2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 5px;
		bottom: -50px;
		left: 50%;
		transform: translateX(-50%);
		padding: 15px 10px;
	}

	.container h1 {
		font-size: 20px;
	}

	.container p {
		font-size: 16px;
		color: blueviolet;
		font-weight: bold;
	}
</style>
