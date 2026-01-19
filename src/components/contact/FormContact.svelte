<script lang="ts">
	import DashedSeparator from '../../components/DashedSeparator.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
	import BlueButton from '../../components/BlueButton.svelte';
	import { isValidEmail } from '../../utils/regexs';
	import Swal from 'sweetalert2';
	import { RingLoader } from 'svelte-loading-spinners';
	import { contactInfo } from '../../data/contactInfo';
	import SocialNetworks from '../SocialNetworks.svelte';

	let emailData = $state({ name: '', email: '', phone: '', message: '' });
	let loader: boolean = $state(false);

	const onSubmit = async (e: SubmitEvent) => {
		e.preventDefault();

		if (!emailData.name || !emailData.email || !emailData.phone || !emailData.message) {
			Swal.fire({
				title: 'Info!',
				text: 'Completar todos los campos!',
				icon: 'info'
			});
		} else if (!isValidEmail(emailData.email)) {
			Swal.fire({
				title: 'Info!',
				text: 'Ingresar un email valido',
				icon: 'info'
			});
		} else {
			loader = true;
			try {
				const res = await fetch('/api/contact', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(emailData)
				});

				const data = await res.json();

				if (res.ok) {
					Swal.fire({
						title: 'Éxito!',
						text: data.message || 'Email enviado correctamente.',
						icon: 'success',
						confirmButtonText: 'Ok'
					});

					emailData = { name: '', email: '', phone: '', message: '' };
				} else {
					throw new Error(data.message || 'Error al enviar el email.');
				}
			} catch (error) {
				console.error('Error:', error);
				Swal.fire({
					title: 'Error',
					text: 'Hubo un problema al enviar el email. Por favor intentá de nuevo.',
					icon: 'error',
					confirmButtonText: 'Ok'
				});
			} finally {
				loader = false;
			}
		}
	};
</script>

<section class="container">
	<div class="column-container">
		<DashedSeparator />
		<h1 class="black-title">Contactanos</h1>
		<p class="black-text">
			NTG es una productora con historia en televisión, teatro y eventos. Fundada por Gerardo
			Sofovich, seguimos creando propuestas que marcan la cultura y el entretenimiento Argentino.
		</p>

		<div class="flex-container">
			<div class="icon">
				<div>
					<FontAwesomeIcon icon={faEnvelope} />
				</div>
			</div>

			<div class="sub-column-container">
				<p class="text">Email:</p>
				<p class="black-text">{contactInfo.email}</p>
			</div>
		</div>

		<div class="flex-container">
			<div class="icon">
				<div>
					<FontAwesomeIcon icon={faPhone} />
				</div>
			</div>

			<div class="sub-column-container">
				<p class="text">Telefono:</p>
				<p class="black-text">{contactInfo.phone}</p>
			</div>
		</div>

		<SocialNetworks />
	</div>

	<div class="column-container">
		<form
			class="form"
			onsubmit={(e) => {
				onSubmit(e);
			}}
		>
			<h1 class="black-subtitle" style="font-weight: bold;">Dejanos tu mensaje</h1>

			<div class="inputs-container">
				<input class="input" placeholder="Nombre *" bind:value={emailData.name} />
				<input class="input" placeholder="Email *" bind:value={emailData.email} />
				<input class="input" placeholder="Telefono *" bind:value={emailData.phone} type="number" />
				<textarea class="text-area input" placeholder="Mensaje..." bind:value={emailData.message}
				></textarea>

				{#if loader}
					<RingLoader size={24} color="#3498db" />
				{:else}
					<BlueButton value="Enviar Mensaje" />
				{/if}
			</div>
		</form>
	</div>
</section>

<style>
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

	.sub-column-container p {
		word-break: break-all;
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
		height: 150px;
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
		.flex-container {
			gap: 10px;
		}
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

	@media (max-width: 415px) {
		.sub-column-container p {
			font-size: 14px;
		}
	}
</style>
