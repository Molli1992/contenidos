<script lang="ts">
	import { section } from '../store/sections';
</script>

<div class="body">
	<h1>Header - {$section}</h1>
</div>

<style>
	.body {
		background-color: blue;
		padding: 10px;
	}

	@media (max-width: 768px) {
		.body {
			background-color: green;
		}
	}
</style>
