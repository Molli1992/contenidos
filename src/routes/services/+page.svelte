<script lang="ts">
	import HeroHeader from '../../components/hero/HeroHeader.svelte';
	import Service from '../../components/service/Service.svelte';
	import Project from '../../components/service/Project.svelte';

	const route = 'Servicios';
</script>

<main class="body">
	<HeroHeader {route} />

	<Service />

	<Project />
</main>

<style>
	.body {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 100px;
		padding-bottom: 100px;
	}
</style>
