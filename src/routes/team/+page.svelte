<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';
	import heroImg from '../../assets/team-img.avif';
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import SkillBar from '../../components/SkillBar.svelte';
	import TeamCard from '../../components/TeamCard.svelte';

	const imageUrl = heroImg;
	const title = 'Meet the Minds Behind Our Digital Success';
	const description =
		"We're a passionate collective of strategists, designers, and developers, united by a shared vision for digital innovation. Our diverse expertise and collaborative spirit drive us to create exceptional results for every client.";

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

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<div class="container">
		<div class="sub-container">
			<img
				src="https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/section_our_team_01.png"
				alt="team-img"
				class="img"
			/>
		</div>

		<div class="sub-container">
			<DashedSeparator />
			<h1 class="black-title">Skilled Team of Creators</h1>
			<p class="black-text">
				From dedicated SEO strategists to creative web designers, we have the people who can plan
				and execute the right plan for your company.
			</p>

			<div class="skillbar-container">
				<SkillBar
					label="SEO"
					percentage={70}
					gradient="linear-gradient(to right, #facc15, #f97316)"
				/>

				<SkillBar
					label="SMM"
					percentage={93}
					gradient="linear-gradient(to right, #60a5fa, #1e3a8a)"
				/>

				<SkillBar
					label="PPC"
					percentage={53}
					gradient="linear-gradient(to right, #67e8f9, #3b82f6)"
				/>
			</div>
		</div>
	</div>

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

	.container {
		width: 100%;
		max-width: 1200px;
		padding: 0px 25px;
		display: flex;
		gap: 50px;
	}

	.sub-container {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.img {
		width: 100%;
		height: 500px;
		background-color: #f5f5f5;
		padding: 20px;
		border-radius: 20px;
	}

	.skillbar-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 25px;
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

		.sub-container {
			width: 650px;
		}
	}

	@media (max-width: 750px) {
		.title-container {
			width: 100%;
		}
	}

	@media (max-width: 700px) {
		.sub-container {
			width: 100%;
		}
	}

	@media (max-width: 625px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 500px) {
		.img {
			height: 400px;
		}
	}

	@media (max-width: 400px) {
		.img {
			height: 350px;
		}
	}
</style>
