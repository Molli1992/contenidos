<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';
	import heroImg from '../../assets/team-img.avif';
	import AboutTeam from '../../components/team/AboutTeam.svelte';
	import TeamMembers from '../../components/team/TeamMembers.svelte';

	const imageUrl = heroImg;
	const title = 'Meet the Minds Behind Our Digital Success';
	const description =
		"We're a passionate collective of strategists, designers, and developers, united by a shared vision for digital innovation. Our diverse expertise and collaborative spirit drive us to create exceptional results for every client.";
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<AboutTeam />

	<TeamMembers />
</div>

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
