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
		width: 300px;
		display: flex;
		flex-direction: column;
		grid-area: 15px;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 15px;
	}

	.container-icon {
		width: 75px;
		height: 75px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		background-color: #f2f2f2;
		color: blueviolet;
		font-size: 25px;
	}
</style>
