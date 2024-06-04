function initialPageLoad() {
	const content = document.querySelector('#content');

	const heading = document.createElement('h1');
	heading.textContent = 'Are you ready to Feast!?';

	const image = document.createElement('img');
	image.src = './assets/logo.webp';
	image.alt = 'Restaurant Image';
	image.width = 600;

	const paragraph = document.createElement('p');
	paragraph.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quasi
  voluptatibus aperiam beatae inventore ratione eos eligendi commodi
  cupiditate nesciunt, ullam nobis incidunt eius fuga deserunt repellendus
  consectetur, laborum quo.`;

	content.appendChild(heading);
	content.appendChild(image);
	content.appendChild(paragraph);
}

export default initialPageLoad;
