<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

	let { img, name, role }: { img: string; name: string; role: string } = $props();
</script>

<div class="body">
	<div class="img-container" style="background-image: url('{img}');">
		<div class="container-icons">
			<a href="https://x.com/" target="_blank" aria-label="Twiter" class="icon">
				<FontAwesomeIcon icon={faTwitter} />
			</a>
			<a href="https://facebook.com/" target="_blank" aria-label="Facebook" class="icon">
				<FontAwesomeIcon icon={faFacebookF} />
			</a>
			<a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn" class="icon">
				<FontAwesomeIcon icon={faLinkedinIn} />
			</a>
		</div>
	</div>

	<div class="text-container">
		<h1 class="black-subtitle" style="font-size: 20px; font-weight: bold;">{name}</h1>
		<p class="black-text">{role}</p>
	</div>
</div>

<style>
	.body {
		position: relative;
		height: 400px;
		width: 275px;
	}

	.img-container {
		height: 300px;
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.text-container {
		height: 100px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.container-icons {
		position: absolute;
		top: 285px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		font-size: 14px;
		background-color: blueviolet;
		color: #ffffff;
	}

	.icon:hover {
		background-color: #ffffff;
		color: blueviolet;
	}
</style>
