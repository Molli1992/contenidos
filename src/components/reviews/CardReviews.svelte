<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	let { name, role, review }: { name: string; role: string; review: string } = $props();
</script>

<div class="body">
	<div class="container">
		<div class="container-text">
			<h1 class="title">{name}</h1>
			<p class="text">{role}</p>
		</div>

		<div class="icon">
			<FontAwesomeIcon icon={faEnvelope} />
		</div>
	</div>

	<div class="line"></div>

	<div class="container">
		<p class="text">{review}</p>
	</div>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		padding: 20px;
		gap: 20px;
		min-height: 300px;
		width: 300px;
		background-color: #f5f5f5;
		border-radius: 15px;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.container-text {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.title {
		font-size: 20px;
		color: #252525;
	}

	.text {
		font-size: 14px;
		color: #6e6e6e;
		line-height: 25px;
	}

	.icon {
		font-size: 32px;
		color: blueviolet;
	}

	.line {
		width: 100%;
		height: 2px;
		background-color: blueviolet;
	}
</style>
