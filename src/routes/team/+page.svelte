<script lang="ts">
	import HeroHeader from '../../components/hero/HeroHeader.svelte';
	import AboutTeam from '../../components/team/AboutTeam.svelte';
	import TeamMembers from '../../components/team/TeamMembers.svelte';

	const route = 'Equipo';
</script>

<main class="body">
	<HeroHeader {route} />

	<AboutTeam />

	<TeamMembers />
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
