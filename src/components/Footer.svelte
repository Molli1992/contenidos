<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
	import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
	import { faInstagram } from '@fortawesome/free-brands-svg-icons';
	import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import Swal from 'sweetalert2';
	import BlueButton from './BlueButton.svelte';

	let email: string = $state('');

	const isValidEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const onSubmit = () => {
		if (!email) {
			Swal.fire({
				title: 'Info!',
				text: 'Enter your email',
				icon: 'info'
			});
		} else if (!isValidEmail(email)) {
			Swal.fire({
				title: 'Info!',
				text: 'Please enter a valid email address',
				icon: 'info'
			});
		} else {
			Swal.fire({
				title: 'Success!',
				text: 'You have successfully subscribed',
				icon: 'success'
			});

			email = '';
		}
	};
</script>

<footer class="footer">
	<div class="main-container">
		<div class="container">
			<a href="/">
				<img
					src="https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/logo-white.png"
					alt="Company Logo"
					class="logo"
				/>
			</a>

			<p class="white-text">
				Seofy have much planned for the future, working with great clients and continued software
				development. If you'd like to join our team, then we'd also love to hear from you.
			</p>

			<div class="container-icons">
				<a href="https://whatsapp.com/" target="_blank" aria-label="WhatsApp">
					<FontAwesomeIcon icon={faWhatsapp} />
				</a>
				<a href="https://facebook.com/" target="_blank" aria-label="Facebook">
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a href="https://instagram.com/" target="_blank" aria-label="Instagram">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			</div>
		</div>

		<div class="container">
			<h1 class="white-subtitle">Services</h1>
			<div>
				<p class="white-text">Search Engine Marketing</p>
				<p class="white-text">Search Engine Optimisation</p>
				<p class="white-text">Pay Per Click</p>
				<p class="white-text">Social Media</p>
				<p class="white-text">Technical SEO Audit</p>
				<p class="white-text">Content Marketing</p>
			</div>
		</div>

		<div class="container">
			<h1 class="white-subtitle">Contacts</h1>
			<div>
				<p class="white-text">
					Adress: 27 Division St, New York, NY. 10002, United States of America.
				</p>
				<p class="white-text">Website: seofy.com</p>
				<p class="white-text">Email: seofy@mail.com</p>
				<p class="white-text">Phone: +8 (123) 985 789</p>
				<p class="white-text">Fax: +8 (123) 985 788</p>
			</div>
		</div>

		<div class="container">
			<h1 class="white-subtitle">Newsletter</h1>
			<input placeholder="Enter your email *" class="newsletter-input" bind:value={email} />
			<BlueButton value="SUBSCRIBE" onclick={onSubmit} />
		</div>
	</div>

	<div class="bottom-container">
		<p>Terms of use | Privacy Environmental Policy</p>
		<p>Copyright © 2025 Seofy all Rights Reserved.</p>
	</div>
</footer>

<style>
	.footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0px 15px;
		background-color: darkblue;
	}

	.main-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		width: 1200px;
		padding: 50px 0px;
		align-items: start;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 250px;
	}

	.logo {
		height: 40px;
	}

	.container-icons {
		display: flex;
		gap: 15px;
	}

	.container-icons a {
		background-color: #ffffff;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: blueviolet;
		font-size: 18px;
	}

	.container-icons a:hover {
		background-color: blueviolet;
		color: #ffffff;
	}

	.container h1 {
		margin-bottom: 20px;
	}

	.newsletter-input {
		max-width: 300px;
		padding: 10px 15px;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: 20px;
	}

	.bottom-container {
		width: 1200px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid rgba(150, 150, 150, 0.5);
		padding: 15px;
	}

	.bottom-container p {
		color: #ffffff;
		font-size: 14px;
	}

	@media (max-width: 1250px) {
		.footer {
			padding: 0px 75px;
		}
		.main-container {
			grid-template-columns: 1fr 1fr;
			width: 100%;
			padding: 75px 0px;
			gap: 50px;
		}

		.container {
			width: 100%;
		}

		.bottom-container {
			width: 100%;
		}
	}

	@media (max-width: 825px) {
		.bottom-container {
			flex-direction: column;
			gap: 10px;
		}
	}

	@media (max-width: 725px) {
		.footer {
			padding: 0px 40px;
		}
		.main-container {
			padding: 50px 0px;
		}
	}

	@media (max-width: 650px) {
		.footer {
			padding: 0px 20px;
		}
		.main-container {
			grid-template-columns: 1fr;
		}
	}
</style>
