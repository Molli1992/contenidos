<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	let { icon, title, description }: { icon: IconDefinition; title: string; description: string } =
		$props();
</script>

<div class="body">
	<div class="container-icon">
		<FontAwesomeIcon {icon} />
	</div>

	<h1 class="black-subtitle">{title}</h1>

	<p class="black-text">{description}</p>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 400px;
		width: 350px;
		background-color: #f5f5f5;
		gap: 30px;
		padding: 0px 25px;
		border-radius: 15px;
	}

	.container-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
		height: 100px;
		width: 100px;
		border-radius: 50%;
		color: blueviolet;
		font-size: 36px;
	}

	@media (max-width: 450px) {
		.body {
			width: 100%;
			padding: 0px 15px;
		}
	}
</style>
