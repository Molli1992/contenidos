<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import { openWhatsapp, openInstagram, openYouTube } from '../utils/socialNetworks';
</script>

<div class="container-icons">
	<button onclick={openWhatsapp}>
		<FontAwesomeIcon icon={faWhatsapp} />
	</button>
	<button onclick={openInstagram}>
		<FontAwesomeIcon icon={faInstagram} />
	</button>
	<button onclick={openYouTube}>
		<FontAwesomeIcon icon={faYoutube} />
	</button>
</div>

<style>
	.container-icons {
		width: 100%;
		display: flex;
		gap: 15px;
	}

	.container-icons button {
		all: unset;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		font-size: 20px;
		background-color: blueviolet;
		color: #ffffff;
	}

	.container-icons button:hover {
		background-color: #ffffff;
		color: blueviolet;
	}
</style>
