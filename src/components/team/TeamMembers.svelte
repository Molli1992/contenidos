<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import TeamCard from '../../components/TeamCard.svelte';

	const team = [
		{
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/team_1-420x460.jpg',
			name: 'Mark Liuw',
			role: 'General Manager'
		},
		{
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/team_2-420x460.jpg',
			name: 'Angela Kwang',
			role: 'Chief Operating Officer'
		},
		{
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/team_3-420x460.jpg',
			name: 'Nina Sherwood',
			role: 'Senior Digital Strategist'
		},
		{
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/team_4-420x460.jpg',
			name: 'Cherlyn Long',
			role: 'Managing Director'
		},
		{
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/team_5-420x460.jpg',
			name: 'Amy Cutter',
			role: 'Head of Technical SEO'
		},
		{
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/team_6-420x460.jpg',
			name: 'Mark Porter',
			role: 'Head of Content'
		},
		{
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/team_7-420x460.jpg',
			name: 'Matt Hopson',
			role: 'Senior SEM Manager'
		},
		{
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/team_8-420x460.jpg',
			name: 'Laura Brady',
			role: 'SEO Consultant'
		}
	];
</script>

<div
	class="container"
	style="flex-direction: column; align-items: center; justify-content: center;"
>
	<div class="title-container">
		<DashedSeparator />
		<h1 class="black-title">Our Executive Team</h1>
		<p class="black-text">
			Our success is a result of teamwork and building upon our technical expertise and creative
			style providing a full-service solution to our clients.
		</p>
	</div>

	<div class="grid-container">
		{#each team as team (team.name)}
			<TeamCard img={team.img} name={team.name} role={team.role} />
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1200px;
		padding: 0px 25px;
		display: flex;
		gap: 50px;
	}

	.title-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 700px;
		text-align: center;
		gap: 25px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		place-items: center;
		gap: 25px;
	}

	@media (max-width: 1225px) {
		.grid-container {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media (max-width: 925px) {
		.grid-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 900px) {
		.container {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	@media (max-width: 750px) {
		.title-container {
			width: 100%;
		}
	}

	@media (max-width: 625px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
