<script lang="ts">
	import { goto } from '$app/navigation';
	import { changeSection } from '../../store/sections';

	const changeRoute = () => {
		changeSection('Home');
		goto('/');
	};
</script>

<div class="body">
	<h1>Contact Us</h1>

	<button onclick={changeRoute} class="button">Home</button>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
	}

	.button {
		width: fit-content;
		padding: 5px;
		cursor: pointer;
	}
</style>
