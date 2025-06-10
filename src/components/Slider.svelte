<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import { Pagination, Navigation, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
	import CardReviews from './reviews/CardReviews.svelte';
	import CardService from './service/CardService.svelte';
	import CardProducciones from './producciones/CardProducciones.svelte';
	import CardCompanies from './companies/CardCompanies.svelte';
	import { reviewsData } from '../data/reviewsData';
	import { projectsData } from '../data/projectsData';
	import { produccionesData } from '../data/produccionesData';
	import { companiesData } from '../data/companiesData';

	let swiperContainer: HTMLDivElement;

	let {
		reviews,
		projects,
		producciones,
		companies
	}: { reviews?: boolean; projects?: boolean; producciones?: boolean; companies?: boolean } =
		$props();

	const bottom = reviews
		? '50px'
		: projects
			? '50px'
			: producciones
				? '80px'
				: companies
					? '80px'
					: '0px';

	onMount(() => {
		if (reviews) {
			new Swiper(swiperContainer, {
				modules: [Pagination, Navigation],
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				spaceBetween: 30,
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					776: {
						slidesPerView: 2
					}
				}
			});
		} else if (projects) {
			new Swiper(swiperContainer, {
				modules: [Pagination, Navigation],
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				spaceBetween: 30,
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					825: {
						slidesPerView: 2
					},
					1225: {
						slidesPerView: 3
					}
				}
			});
		} else if (producciones) {
			new Swiper(swiperContainer, {
				modules: [Pagination, Navigation],
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				spaceBetween: 30,
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					750: {
						slidesPerView: 2
					},
					1000: {
						slidesPerView: 3
					}
				}
			});
		} else if (companies) {
			new Swiper(swiperContainer, {
				modules: [Pagination, Autoplay, Navigation],
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				spaceBetween: 30,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				},
				breakpoints: {
					600: {
						slidesPerView: 2
					},
					900: {
						slidesPerView: 3
					},
					1200: {
						slidesPerView: 4
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
					<CardReviews name={review.name} role={review.role} review={review.review} />
				</div>
			{/each}
		{:else if projects}
			{#each projectsData as project}
				<div class="swiper-slide">
					<CardService imageUrl={project.img} name={project.name} service={project.service} />
				</div>
			{/each}
		{:else if producciones}
			{#each produccionesData as produccion}
				<div class="swiper-slide">
					<CardProducciones youtubeId={produccion.youtubeId} title={produccion.title} />
				</div>
			{/each}
		{:else if companies}
			{#each companiesData as company}
				<div class="swiper-slide">
					<CardCompanies imageUrl={company.imageUrl} />
				</div>
			{/each}
		{/if}
	</div>

	<div class="container-navigation" style="bottom: {bottom}">
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>

		<div class="swiper-pagination"></div>
	</div>
</div>

<style>
	.swiper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		padding-bottom: 150px;
	}

	.swiper-wrapper {
		width: 100%;
	}

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container-navigation {
		width: 100%;
		position: absolute;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: #000;
		--swiper-navigation-size: 30px;
		background-color: #f2f2f2;
		height: 50px;
		width: 50px;
		border-radius: 10px;
	}
</style>
