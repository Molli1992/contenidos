<script lang="ts">
	let { value, onclick }: { value: string; onclick: () => void } = $props();
</script>

<button {onclick}>{value}</button>

<style>
	button {
		padding: 10px 15px;
		border: 2px solid transparent;
		border-radius: 5px;
		font-size: 20px;
		background-color: blueviolet;
		color: #ffffff;
		cursor: pointer;
		transition:
			background-color 0.5s ease,
			color 0.5s ease,
			border-color 0.5s ease;
	}

	button:hover {
		background-color: #ffffff;
		color: blueviolet;
		border-color: blueviolet;
	}
</style>
