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
			name: 'Carolina Méndez',
			role: 'Productora audiovisual',
			review:
				'“Trabajar con Contenidos marcó un antes y un después en nuestras producciones. Supieron interpretar nuestra visión y llevarla a escena con profesionalismo y creatividad. Totalmente recomendables.”'
		},
		{
			id: 2,
			name: 'Esteban Rodríguez',
			role: 'Organizador de eventos',
			review:
				'“La experiencia fue impecable. Desde la planificación hasta la ejecución técnica, Contenidos nos brindó un acompañamiento constante y resultados que superaron nuestras expectativas.”'
		},
		{
			id: 3,
			name: 'Lucía Fernández',
			role: 'Periodista cultural',
			review:
				'“Contenidos demuestra un compromiso auténtico con el arte y la cultura. La calidad de sus producciones es sobresaliente, y siempre logran generar un impacto positivo en el público.”'
		},
		{
			id: 4,
			name: 'Matías Gómez',
			role: 'Director teatral',
			review:
				'“Su equipo técnico y artístico tiene una mirada integral que facilita todo el proceso creativo. Con Contenidos, cada detalle está cuidado, y eso se nota en el resultado final.”'
		},
		{
			id: 5,
			name: 'Mariana López',
			role: 'Gestora cultural',
			review:
				'“Gracias a Contenidos pudimos llevar adelante un festival de gran escala sin inconvenientes. Se destacan por su organización, respuesta rápida y capacidad de adaptación.”'
		},
		{
			id: 6,
			name: 'Santiago Paredes',
			role: 'Músico independiente',
			review:
				'“Confié en Contenidos para la producción de mi show y fue la mejor decisión. Supieron potenciar mi propuesta artística y cuidar cada aspecto del evento. ¡Excelente trato y resultados!”'
		},
		{
			id: 7,
			name: 'Florencia Ibáñez',
			role: 'Directora de arte',
			review:
				'“Fue un placer trabajar con un equipo tan comprometido y creativo. Entendieron rápidamente nuestras necesidades visuales y entregaron materiales de altísima calidad.”'
		},
		{
			id: 8,
			name: 'Julián Cabrera',
			role: 'Empresario del entretenimiento',
			review:
				'“He trabajado con muchas productoras, pero pocas tienen la capacidad de resolución que tiene Contenidos. Siempre ofrecen soluciones prácticas sin perder nivel.”'
		},
		{
			id: 9,
			name: 'Natalia Duarte',
			role: 'Productora de televisión',
			review:
				'“Contenidos es sinónimo de confianza. Su experiencia en TV se nota desde la primera reunión. Cumplen con los tiempos y elevan el estándar de cualquier producción.”'
		},
		{
			id: 10,
			name: 'Tomás Vega',
			role: 'Iluminador escénico',
			review:
				'“Siempre que trabajamos con Contenidos nos sentimos respaldados. Su logística y soporte técnico hacen que todo funcione como reloj. Un equipo sólido.”'
		},
		{
			id: 11,
			name: 'Rocío Morales',
			role: 'Actriz y docente',
			review:
				'“Participé en varias producciones con Contenidos y siempre valoré el respeto por el artista. Cuidan cada instancia del proceso y fomentan un ambiente creativo.”'
		},
		{
			id: 12,
			name: 'Federico Torres',
			role: 'Técnico de sonido',
			review:
				'“La coordinación con el equipo de Contenidos fue excelente. Todo estaba previsto y claro desde el inicio. Da gusto trabajar con profesionales así.”'
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
					<CardReviews name={review.name} role={review.role} review={review.review} />
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
