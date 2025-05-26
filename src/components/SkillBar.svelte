<script lang="ts">
	let { label, percentage, gradient }: { label: string; percentage: number; gradient: string } =
		$props();
</script>

<div>
	<div class="label-row">
		<span class="label">{label}</span>
		<span class="percentage">{percentage}%</span>
	</div>
	<div class="bar-background">
		<div class="bar-fill" style="width: {percentage}%; background: {gradient};"></div>
	</div>
</div>

<style>
	.label-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}

	.label,
	.percentage {
		font-size: 14px;
		color: #374151;
		font-weight: bold;
	}

	.bar-background {
		width: 100%;
		background-color: #e5e7eb;
		border-radius: 9999px;
		height: 10px;
		overflow: hidden;
	}

	.bar-fill {
		height: 100%;
		border-radius: 9999px;
	}
</style>
