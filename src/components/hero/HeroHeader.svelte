<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let { route }: { route: string } = $props();
	let show: boolean = $state(false);

	onMount(() => {
		show = true;
	});
</script>

<div class="body">
	{#if show}
		<div in:fly={{ y: -50, duration: 600 }}>
			<h1>{route}</h1>
		</div>

		<div class="container" in:fly={{ y: 50, duration: 600, delay: 200 }}>
			<a href="/">Inicio</a>
			<div class="circle"></div>
			<p>{route}</p>
		</div>
	{/if}
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
		background-image: url('../../assets/images/page-title.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		color: #252525;
		text-align: center;
		margin-top: 105px;
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
