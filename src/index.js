import './styles/style.css';
import initialPageLoad from './initialPageLoad.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
} else {
	console.log('Looks like we are in production mode!');
}

document.addEventListener('DOMContentLoaded', () => {
	initialPageLoad();

	const homeBtn = document.querySelector('#homeBtn');
	const menuBtn = document.querySelector('#menuBtn');
	const aboutBtn = document.querySelector('#aboutBtn');

	homeBtn.addEventListener('click', initialPageLoad);
	menuBtn.addEventListener('click', loadMenu);
	aboutBtn.addEventListener('click', loadAbout);
});
