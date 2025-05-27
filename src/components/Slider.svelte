<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import { Pagination } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import CardReviews from './reviews/CardReviews.svelte';
	import CardService from './service/CardService.svelte';

	let swiperContainer: HTMLDivElement;

	let { reviews, projects }: { reviews?: boolean; projects?: boolean } = $props();

	const paginationMarginTop = reviews ? '30px' : projects ? '90px' : '0';

	const reviewsData = [
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

	const projectsData = [
		{
			id: 1,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_1.jpg',
			name: 'Content Strategy',
			service: 'DIGITAL PR'
		},
		{
			id: 2,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_2.jpg',
			name: 'SEO Optimization',
			service: 'PPC | SEO'
		},
		{
			id: 3,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_3.jpg',
			name: 'Social Engagement',
			service: 'SEO | SMM'
		},
		{
			id: 4,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_4.jpg',
			name: 'Technical SEO',
			service: 'SEO'
		},
		{
			id: 5,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_5.jpg',
			name: 'Domain Migration',
			service: 'PPC | SEO'
		},
		{
			id: 6,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_6.jpg',
			name: 'Content Marketing',
			service: 'DIGITAL PR | SEO'
		},
		{
			id: 7,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_7.jpg',
			name: 'Technical SEO',
			service: 'DIGITAL PR'
		},
		{
			id: 8,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_8.jpg',
			name: 'Hosting Company Rank',
			service: 'PPC | SEO'
		},
		{
			id: 9,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_9.jpg',
			name: 'Data Analisys',
			service: 'SMM'
		},
		{
			id: 10,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_10.jpg',
			name: 'Audience Monitoring',
			service: 'MONITORING'
		},
		{
			id: 11,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_11.jpg',
			name: 'Traffic Management',
			service: 'SEO'
		},
		{
			id: 12,
			img: 'https://wgl-dsites.net/seofy/wp-content/uploads/2018/11/pf_12.jpg',
			name: 'SEO Consulting',
			service: 'SEO | SMM'
		}
	];

	onMount(() => {
		if (reviews) {
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
		} else if (projects) {
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
					825: {
						slidesPerView: 2,
						slidesPerGroup: 2
					},
					1225: {
						slidesPerView: 3,
						slidesPerGroup: 3
					}
				}
			});
		}
	});
</script>

<div bind:this={swiperContainer} class="swiper">
	<div class="swiper-wrapper">
		{#if reviews}
			{#each reviewsData as review}
				<div class="swiper-slide">
					<CardReviews name={review.name} company={review.company} review={review.review} />
				</div>
			{/each}
		{:else if projects}
			{#each projectsData as project}
				<div class="swiper-slide">
					<CardService imageUrl={project.img} name={project.name} service={project.service} />
				</div>
			{/each}
		{/if}
	</div>
	<div class="swiper-pagination" style="margin-top: {paginationMarginTop}"></div>
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
		position: relative;
	}
</style>
