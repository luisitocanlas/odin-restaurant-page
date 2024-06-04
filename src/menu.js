import chicken from './assets/chicken-adobo.png';
import beef from './assets/beef-kare-kare.png';
import pork from './assets/pork-sisig.png';

function createMenuItem(name, imageSrc, description) {
	const card = document.createElement('div');
	card.classList.add('menu-item');

	const itemName = document.createElement('h2');
	itemName.textContent = name;

	const itemImage = document.createElement('img');
	itemImage.src = imageSrc;
	itemImage.alt = `${name} image`;

	const itemDescription = document.createElement('p');
	itemDescription.textContent = description;

	card.appendChild(itemName);
	card.appendChild(itemImage);
	card.appendChild(itemDescription);

	return card;
}

function loadMenu() {
	const content = document.querySelector('#content');

	if (content.textContent !== '') {
		content.textContent = '';
	}

	const menuItems = [
		createMenuItem(
			'Chicken Adobo',
			chicken,
			'A delectable plate of Chicken Adobo, featuring tender chicken pieces marinated in a rich soy sauce and vinegar mixture, cooked to perfection with garlic, bay leaves, and black peppercorns. The dish is garnished with green onions and served with a side of steaming white rice.'
		),
		createMenuItem(
			'Beef Kare-Kare',
			beef,
			'A sumptuous bowl of Beef Kare-Kare, showcasing tender beef chunks cooked in a rich peanut sauce, accompanied by a colorful array of vegetables like eggplant, string beans, and bok choy. The dish is beautifully presented with a side of shrimp paste.'
		),
		createMenuItem(
			'Pork Sisig',
			pork,
			'A sizzling plate of Pork Sisig, featuring finely chopped pork belly, ears, and liver seasoned with calamansi, onions, and chili peppers. The dish is served on a hot cast iron plate with a raw egg on top, ready to be mixed in for added richness.'
		),
	];

	menuItems.forEach((item) => {
		content.appendChild(item);
	});
}

export default loadMenu;
