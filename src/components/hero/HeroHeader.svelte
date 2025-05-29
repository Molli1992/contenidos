<script lang="ts">
	let { route }: { route: string } = $props();
</script>

<div class="body">
	<h1>{route}</h1>
	<div class="container">
		<a href="/">Home</a>
		<div class="circle"></div>
		<p>{route}</p>
	</div>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin-top: 105px;
		width: 100%;
		height: 250px;
		background-image: url('../../assets/page-title.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		color: #252525;
        text-align: center;
	}

	.body h1 {
		font-size: 42px;
	}

	.container {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.container p {
		font-size: 16px;
	}

	.container a {
		cursor: pointer;
		color: gray;
	}

	.container a:hover {
		color: #000000;
	}

	.circle {
		background-color: blueviolet;
		height: 5px;
		width: 5px;
		border-radius: 50%;
	}
</style>
