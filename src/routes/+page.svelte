<script lang="ts">
	import { goto } from '$app/navigation';
	import { changeSection } from '../store/sections';

	const changeRoute = () => {
		changeSection('Contact');
		goto('/contact');
	};

	let formState = $state({
		name: '',
		birthday: '',
		step: 1,
		error: ''
	});

	const stepOne = () => {
		if (formState.name !== '') {
			formState.step += 1;
			formState.error = '';
		} else {
			formState.error = 'Complete your name';
		}
	};

	const stepTwo = () => {
		if (formState.birthday !== '') {
			formState.step += 1;
			formState.error = '';
		} else {
			formState.error = 'Complete your birthday';
		}
	};

	const Restart = () => {
		formState.name = '';
		formState.birthday = '';
		formState.step = 1;
	};

	const handleSubmit = () => {
		if (formState.step === 1) {
			stepOne();
		} else if (formState.step === 2) {
			stepTwo();
		} else {
			Restart();
		}
	};
</script>

<div class="body">
	<form onsubmit={handleSubmit} class="body">
		{#if formState.step === 1 || formState.step === 2}
			<p>Step: {formState.step}</p>
		{:else}
			<p>Thanks for subscribing!</p>
			<button class="button">Restart</button>
		{/if}

		{#if formState.step === 1}
			<div>
				<div>
					<label for="name">Your name</label>
					<input type="text" id="name" bind:value={formState.name} />
				</div>

				{#if !formState.name && formState.step === 1 && formState.error}
					<p class="error">{formState.error}</p>
				{/if}

				<button class="button">Next</button>
			</div>
		{:else if formState.step === 2}
			<div>
				<div>
					<label for="bday">Your birthday</label>
					<input type="date" id="bday" bind:value={formState.birthday} />
				</div>

				{#if !formState.birthday && formState.step === 2 && formState.error}
					<p class="error">{formState.error}</p>
				{/if}

				<button class="button">Submit</button>
			</div>
		{/if}
	</form>
	<button onclick={changeRoute} class="button">Contact us</button>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
	}

	.error {
		color: red;
	}

	.button {
		width: fit-content;
		padding: 5px;
		cursor: pointer;
	}
</style>
