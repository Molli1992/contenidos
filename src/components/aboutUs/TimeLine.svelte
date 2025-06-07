<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import CardTimeLine from './CardTimeLine.svelte';
	import { dataEvents } from '../../data/dataEvents';
</script>

<div class="body">
	<div class="container">
		<DashedSeparator />
		<h1 class="black-title">La historia de Contenidos</h1>
		<p class="black-text">
			En Contenidos nos dedicamos a la producción, realización y comercialización de espectáculos,
			televisión y eventos. Con más de 25 años de historia, combinamos tradición e innovación para
			ofrecer experiencias inolvidables en medios, teatro, cine y entretenimiento en vivo.
		</p>
	</div>

	<div class="line"></div>

	{#each dataEvents as event}
		<CardTimeLine
			title={event.title}
			description={event.description}
			year={event.year}
			color={event.color}
			side={event.side}
		/>
	{/each}
</div>

<style>
	.body {
		position: relative;
		width: 100%;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0px 25px;
		gap: 50px;
	}

	.container {
		width: 100%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 25px;
	}

	.line {
		width: 4px;
		height: 92%;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
		position: absolute;
		left: 50%;
		top: 240px;
		background-color: #e2e8f0;
		transform: translateX(-50%);
	}

	@media (max-width: 650px) {
		.line {
			display: none;
		}
	}
</style>
