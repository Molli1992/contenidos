import { contactInfo } from '../data/contactInfo';

export const openWhatsapp = () => {
	window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
};

export const openInstagram = () => {
	window.open('https://www.instagram.com', '_blank');
};

export const openYouTube = () => {
	window.open(`https://www.youtube.com/${contactInfo.youtube}`, '_blank');
};
