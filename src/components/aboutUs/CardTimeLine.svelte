<script lang="ts">
	let {
		title,
		description,
		year,
		color,
		side
	}: { title: string; description: string; year: string; color: string; side: string } = $props();
</script>

<div class="container" style="--border-color: {color};">
	{#if side === 'left'}
		<div class="card" style="text-align: right; border-right: 5px solid var(--border-color);">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	{:else}
		<div class="year">
			<h1>{year}</h1>
		</div>
	{/if}

	<div class="hex"></div>

	{#if side === 'left'}
		<div class="year">
			<h1>{year}</h1>
		</div>
	{:else}
		<div class="card" style="text-left: right; border-left: 5px solid var(--border-color);">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		place-items: center;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 10px;
		background: white;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
		width: 400px;
	}

	.card h1 {
		color: #252525;
		font-size: 18px;
	}

	.card p {
		color: #6e6e6e;
		font-size: 16px;
		line-height: 25px;
	}

	.hex {
		width: 22px;
		height: 22px;
		background-color: var(--border-color);
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		margin: 0px 32px;
	}

	.year h1 {
		font-size: 24px;
		color: var(--border-color);
	}

	@media (max-width: 600px) {
		.card {
			width: 300px;
		}
	}

	@media (max-width: 500px) {
		.card {
			width: 250px;
			padding: 15px;
		}

		.card h1 {
			color: #252525;
			font-size: 16px;
		}

		.card p {
			font-size: 14px;
			line-height: 20px;
		}

		.hex {
			width: 18px;
			height: 18px;
			margin: 0px 25px;
		}

		.year h1 {
			font-size: 20px;
		}
	}

	@media (max-width: 425px) {
		.card {
			width: 225px;
		}

		.hex {
			margin: 0px 18px;
		}
	}
</style>
