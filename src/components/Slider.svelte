<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import CardReviews from './reviews/CardReviews.svelte';

	let swiperContainer: HTMLDivElement;

	const reviews = [
		{
			id: 1,
			name: 'Mira Peterson',
			company: 'Marketing Manager',
			review:
				'“Working with Seofy has been a turning point for our digital strategy. Their results-driven approach and ability to adapt to our specific needs allowed us to exceed our traffic and conversion goals in record time. Highly recommended!”'
		},
		{
			id: 2,
			name: 'Ronald Dunkan',
			company: 'Global Commerce',
			review:
				"“We've seen exponential growth in our online sales since Seofy took over our SEO. Their team is highly professional, transparent, and always willing to go the extra mile. An investment that definitely paid off.”"
		},
		{
			id: 3,
			name: 'Dina Olson',
			company: 'Digital Art Studios',
			review:
				'“Seofy not only helped us improve our ranking but also provided a clear vision of how to optimize our online presence. Their constant communication and detailed reports gave us great confidence in the process. Excellent service!”'
		},
		{
			id: 4,
			name: 'Michael Davis',
			company: 'Express Logistics',
			review:
				'“The experience with Seofy has been exceptional. They provided innovative and customized solutions that resulted in a significant increase in our search engine visibility. Their market knowledge is undeniable.”'
		},
		{
			id: 5,
			name: 'Sarah Johnson',
			company: 'Active Life Blog',
			review:
				"“As a content creator, Seofy's keyword strategy and technical audit were fundamental for our blog to reach a much wider audience. Their technical support and clarity in their explanations are a great value.”"
		},
		{
			id: 6,
			name: 'David Miller',
			company: 'Homemade Delights',
			review:
				'“At first, we were skeptical about SEO for a local business, but Seofy proved it works. Thanks to them, more customers are finding our bakery through Google. Their work is methodical, and the results are tangible.”'
		}
	];

	onMount(() => {
		new Swiper(swiperContainer, {
			modules: [Pagination],
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			spaceBetween: 30,
			breakpoints: {
				0: {
					slidesPerView: 1,
					slidesPerGroup: 1
				},
				776: {
					slidesPerView: 2,
					slidesPerGroup: 2
				}
			}
		});
	});
</script>

<div bind:this={swiperContainer} class="swiper">
	<div class="swiper-wrapper">
		{#each reviews as review}
			<div class="swiper-slide">
				<CardReviews name={review.name} company={review.company} review={review.review} />
			</div>
		{/each}
	</div>
	<div class="swiper-pagination"></div>
</div>

<style>
	.swiper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.swiper-wrapper {
		width: 100%;
	}

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.swiper-pagination {
		margin-top: 2rem;
		position: relative;
	}
</style>
