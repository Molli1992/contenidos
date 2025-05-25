<script lang="ts">
	import HeroSection from '../../components/HeroSection.svelte';
	import heroImg from '../../assets/contact-img.avif';
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
	import BlueButton from '../../components/BlueButton.svelte';

	const imageUrl = heroImg;
	const title = "Let's Build Something Great Together";
	const description =
		"Ready to start your next digital project? Have questions about our services? Reach out to us today and let's discuss how we can help your business thrive.";

	const onSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		console.log('submit');
	};
</script>

<div class="body">
	<HeroSection {imageUrl} {title} {description} />

	<div class="container">
		<div class="column-container">
			<DashedSeparator />
			<h1 class="black-title">Get in Touch</h1>
			<p class="black-text">
				Seofy is a USA search engine marketing agency, that deliver digital marketing strategies to
				companies worldwide. Contact us today to find out how we can help you.
			</p>

			<div class="flex-container">
				<div class="icon">
					<div>
						<FontAwesomeIcon icon={faLocationDot} />
					</div>
				</div>

				<div class="sub-column-container">
					<p class="text">Visit Us:</p>
					<p class="black-text">27 Division St, New York, NY 10002, USA</p>
				</div>
			</div>

			<div class="flex-container">
				<div class="icon">
					<div>
						<FontAwesomeIcon icon={faEnvelope} />
					</div>
				</div>

				<div class="sub-column-container">
					<p class="text">Mail Us:</p>
					<p class="black-text">seofy@mail.com</p>
				</div>
			</div>

			<div class="flex-container">
				<div class="icon">
					<div>
						<FontAwesomeIcon icon={faPhone} />
					</div>
				</div>

				<div class="sub-column-container">
					<p class="text">Phone Us:</p>
					<p class="black-text">+8 (123) 985 789</p>
				</div>
			</div>
		</div>

		<div class="column-container">
			<form
				class="form"
				onsubmit={(e) => {
					onSubmit(e);
				}}
			>
				<h1 class="black-subtitle" style="font-weight: bold;">Drop Us a Line</h1>

				<div class="inputs-container">
					<input class="input" placeholder="Name *" />
					<input class="input" placeholder="Email *" />
					<textarea class="text-area input" placeholder="Message..."></textarea>
					<BlueButton value="SEND A MESSAGE" />
				</div>
			</form>
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

	.column-container {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.flex-container {
		display: flex;
		align-items: center;
		gap: 25px;
	}

	.icon {
		color: blue;
		background-color: #f2f2f2;
		font-size: 22px;
		border-radius: 5px;
		padding: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.text {
		font-weight: bold;
		font-size: 18px;
		line-height: 30px;
		color: #000000;
	}

	.sub-column-container {
		display: flex;
		flex-direction: column;
	}

	.form {
		width: 100%;
		background-color: #f2f2f2;
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding: 30px;
		border-radius: 10px;
	}

	.inputs-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.input {
		background-color: #ffffff;
		color: #6e6e6e;
		outline: none;
		border: none;
		padding: 15px 20px;
		border-radius: 5px;
		font-size: 16px;
	}

	.text-area {
		height: 200px;
	}

	@media (max-width: 1000px) {
		.container {
			flex-direction: column;
			align-items: center;
		}

		.column-container {
			width: 600px;
		}
	}

	@media (max-width: 650px) {
		.column-container {
			width: 100%;
		}
		.text {
			font-size: 16px;
		}
	}

	@media (max-width: 450px) {
		.form {
			padding: 20px;
		}
	}
</style>
