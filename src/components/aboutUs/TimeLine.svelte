<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import CardTimeLine from './CardTimeLine.svelte';

	const events = [
		{
			title: 'A Brief History',
			description: 'We joined the team and after much success, the agency was eventually...',
			year: '2021',
			color: '#f7a400',
			side: 'left'
		},
		{
			title: 'Something Big',
			description: 'The team move into its first office, in the centre of Henley-on-Thames.',
			year: '2022',
			color: '#ff6600',
			side: 'right'
		},
		{
			title: 'The Army Grows',
			description: 'The team of Seofy grow to around 8, as amazing new clients come on board.',
			year: '2023',
			color: '#00d5d3',
			side: 'left'
		},
		{
			title: 'An Award-Winning Creation',
			description: 'Continued growth in cool new clients means that our team continues.',
			year: '2024',
			color: '#1493ff',
			side: 'right'
		},
		{
			title: 'Expansion & Awards',
			description: 'The team grows to nearly 40, working with some incredible clients.',
			year: '2025',
			color: '#3f49d9',
			side: 'left'
		}
	];
</script>

<div class="body">
	<div class="container">
		<DashedSeparator />
		<h1 class="black-title">The Story of Seofy</h1>
		<p class="black-text">
			We enjoy adapting our strategies to offer every client the best solutions that are at the
			forefront of the industry.
		</p>
	</div>

	<div class="line"></div>

	{#each events as event}
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
		height: 860px;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
		position: absolute;
		left: 50%;
		top: 180px;
		background-color: #e2e8f0;
		transform: translateX(-50%);
	}

	@media (max-width: 950px) {
		.line {
			display: none;
		}
	}
</style>
