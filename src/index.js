import initialPageLoad from './initialPageLoad.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

document.addEventListener('DOMContentLoaded', () => {
	initialPageLoad();

	const homeBtn = document.querySelector('#homeBtn');
	const menuBtn = document.querySelector('#menuBtn');
	const aboutBtn = document.querySelector('#aboutBtn');

	homeBtn.addEventListener('click', initialPageLoad);
	menuBtn.addEventListener('click', loadMenu);
	aboutBtn.addEventListener('click', loadAbout);
});
